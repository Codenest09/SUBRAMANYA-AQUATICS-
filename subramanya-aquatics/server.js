const fs = require('fs');
const path = require('path');
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
