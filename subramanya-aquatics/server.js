const fs = require('fs');
const path = require('path');

// First copy images
const srcDir = 'C:\\Users\\siris\\.gemini\\antigravity\\brain\\0fab624b-c31e-4b50-bcf7-1b6d5370541c';
const destDir = path.join(__dirname, 'images');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

// Copy QR scan image if exists in parent directory
const parentQr = path.join(__dirname, '..', '..', 'QR scan.jpeg');
if (fs.existsSync(parentQr)) {
  try {
    fs.copyFileSync(parentQr, path.join(__dirname, 'QR scan.jpeg'));
    fs.copyFileSync(parentQr, path.join(destDir, 'QR scan.jpeg'));
    console.log('Copied QR scan.jpeg to root and images folder');
  } catch (e) {
    console.error(`Failed to copy QR scan.jpeg: ${e.message}`);
  }
}

const files = {
  'arowana_fish_1778055591173.png': 'arowana.png',
  'flowerhorn_fish_1778055607274.png': 'flowerhorn.png',
  'betta_fish_1778055621736.png': 'betta.png',
  'goldfish_1778055649109.png': 'goldfish.png',
  'koi_fish_1778055667259.png': 'koi.png',
  'discus_fish_1778055682847.png': 'discus.png',
  'guppies_fish_1778055706144.png': 'guppies.png',
  'oscar_fish_1778055722886.png': 'oscar.png',
  'aquarium_gallery_1_1778055739822.png': 'gallery1.png',
  'aquarium_gallery_2_1778055768209.png': 'gallery2.png',
  'aquarium_gallery_3_1778055788695.png': 'gallery3.png',
  'aquarium_gallery_4_1778055803243.png': 'gallery4.png',
  'aquarium_gallery_5_1778055826084.png': 'gallery5.png',
  'aquarium_gallery_6_1778055843138.png': 'gallery6.png',
};

let copied = 0;
for (const [src, dest] of Object.entries(files)) {
  try {
    fs.copyFileSync(path.join(srcDir, src), path.join(destDir, dest));
    copied++;
  } catch (e) { console.error(`Skip: ${dest}`); }
}
console.log(`Copied ${copied} images`);

// Now start HTTP server
const http = require('http');

// Server-side products persistence file
const PRODUCTS_FILE = path.join(__dirname, 'products.json');

const mimeTypes = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.svg': 'image/svg+xml', '.json': 'application/json'
};

// Helper to read request body (supports large payloads for base64 images)
function readBody(req, callback) {
  const chunks = [];
  req.on('data', chunk => chunks.push(chunk));
  req.on('end', () => callback(Buffer.concat(chunks).toString()));
}

const server = http.createServer((req, res) => {
  let decodedUrl = decodeURI(req.url);

  // --- API: GET /api/products --- Serve products from server-side JSON file
  if (decodedUrl === '/api/products' && req.method === 'GET') {
    if (fs.existsSync(PRODUCTS_FILE)) {
      try {
        const data = fs.readFileSync(PRODUCTS_FILE, 'utf8');
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        });
        res.end(data);
      } catch (e) {
        console.error('Error reading products.json:', e.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to read products' }));
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('[]');
    }
    return;
  }

  // --- API: POST /api/products --- Save products to server-side JSON file
  if (decodedUrl === '/api/products' && req.method === 'POST') {
    readBody(req, (body) => {
      try {
        const products = JSON.parse(body);
        if (!Array.isArray(products)) {
          throw new Error('Products must be an array');
        }
        fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8');
        console.log(`Saved ${products.length} products to products.json`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, count: products.length }));
      } catch (e) {
        console.error('Error saving products:', e.message);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to save products: ' + e.message }));
      }
    });
    return;
  }

  // --- Static file serving ---
  if (decodedUrl === '/admin' || decodedUrl === '/admin/') {
    decodedUrl = '/admin.html';
  }
  let filePath = path.join(__dirname, decodedUrl === '/' ? 'index.html' : decodedUrl);
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});
server.listen(3000, () => console.log('Server running at http://localhost:3000'));
