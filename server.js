const fs = require('fs');
const path = require('path');

// First copy images
const generatedQr = 'C:\\Users\\siris\\.gemini\\antigravity\\brain\\f25292fb-0708-4f33-8f93-49f3ffb70f38\\qr_scan_1778252816977.png';
if (fs.existsSync(generatedQr)) {
  try {
    fs.copyFileSync(generatedQr, path.join(__dirname, 'QR scan.jpeg'));
    console.log('Successfully copied generated premium QR code to root workspace!');
  } catch (e) {
    console.error('Failed to copy generated QR image:', e.message);
  }
}

const srcDir = 'C:\\Users\\siris\\.gemini\\antigravity\\brain\\0fab624b-c31e-4b50-bcf7-1b6d5370541c';
const destDir = path.join(__dirname, 'images');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

if (fs.existsSync(generatedQr)) {
  try {
    fs.copyFileSync(generatedQr, path.join(destDir, 'QR scan.jpeg'));
    console.log('Successfully copied generated premium QR code to images folder!');
  } catch (e) {
    console.error('Failed to copy generated QR image to images folder:', e.message);
  }
}

// Copy QR scan image if exists in parent directory
const parentQr = path.join(__dirname, '..', 'QR scan.jpeg');
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
const url = require('url');
const querystring = require('querystring');

// Simple in-memory storage for orders (replace with database in production)
let orders = [];
const ORDERS_FILE = path.join(__dirname, 'orders.json');

// Load existing orders
if (fs.existsSync(ORDERS_FILE)) {
  try {
    orders = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8'));
  } catch (e) {
    console.log('Could not load orders file');
  }
}

// Save orders to file
function saveOrders() {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

const mimeTypes = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.svg': 'image/svg+xml', '.json': 'application/json'
};
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let decodedUrl = decodeURI(req.url);
  
  // Handle API endpoints
  if (decodedUrl === '/api/orders' && req.method === 'GET') {
    // Return orders for admin panel
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(orders));
    return;
  }
  
  if (decodedUrl === '/api/orders' && req.method === 'POST') {
    // Handle new order submission
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const orderData = JSON.parse(body);
        const newOrder = {
          'Order ID': orderData['Order ID'] || `SA-${9000 + orders.length + 1}`,
          'Customer Name': orderData['Customer Name'],
          'Phone': orderData['Phone'],
          'Address': orderData['Address'],
          'Items': orderData['Items'],
          'Total': orderData['Total'],
          'Payment': orderData['Payment'],
          'Status': orderData['Status'] || 'Pending Verification',
          'Date': orderData['Date'] || new Date().toLocaleDateString('en-IN')
        };
        orders.unshift(newOrder);
        saveOrders();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, orderId: newOrder['Order ID'] }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid order data' }));
      }
    });
    return;
  }
  
  if (decodedUrl.startsWith('/api/orders/') && req.method === 'PUT') {
    // Handle order status updates
    const orderId = decodedUrl.split('/api/orders/')[1];
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const updateData = JSON.parse(body);
        const order = orders.find(o => o['Order ID'] === orderId);
        if (order) {
          order.Status = updateData.status;
          saveOrders();
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true }));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Order not found' }));
        }
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid update data' }));
      }
    });
    return;
  }
  
  // Handle admin page routing
  if (decodedUrl === '/admin' || decodedUrl === '/admin/' || decodedUrl.startsWith('/admin/')) {
    decodedUrl = '/admin.html';
  }
  
  // Serve static files
  let filePath = path.join(__dirname, decodedUrl === '/' ? 'index.html' : decodedUrl);
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) { 
      res.writeHead(404); 
      res.end('Not found'); 
      return; 
    }
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});
server.listen(3000, () => console.log('Server running at http://localhost:3000'));
