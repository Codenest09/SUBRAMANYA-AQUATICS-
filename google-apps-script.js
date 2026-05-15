// =====================================================
// Google Apps Script — Deploy as Web App
// For: SUBRAMANYA AQUATICS Order Sheet
// Sheet ID: 1GGGdGLaALV2eYbBtnDLAdqjewdIPPmEPuTOd4LOy_Ak
// =====================================================
//
// HOW TO DEPLOY:
// 1. Open your Google Sheet
// 2. Click Extensions → Apps Script
// 3. Delete any existing code and paste this entire file
// 4. Click Deploy → New Deployment
// 5. Select Type: "Web app"
// 6. Set "Execute as": Me
// 7. Set "Who has access": Anyone
// 8. Click Deploy
// 9. Copy the Web App URL (it starts with https://script.google.com/macros/...)
// 10. Paste that URL into script.js where it says GOOGLE_SHEETS_URL
//
// COLUMNS IN SHEET (Row 1 headers):
// A: Name | B: Address | C: City | D: Pincode | E: State | F: Contact | G: Order ID | H: Utr
// =====================================================

const SHEET_NAME = 'Sheet1';

// Handle POST requests from the website
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const data = JSON.parse(e.postData.contents);

    // Append a new row matching your column order: Name, Address, City, Pincode, State, Contact, Order ID, Utr
    sheet.appendRow([
      data.name      || '',
      data.address   || '',
      data.city      || '',
      data.pincode   || '',
      data.state     || '',
      data.contact   || '',
      data.orderId   || '',
      data.utr       || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Order saved to sheet' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for syncing orders to admin panel)
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', orders: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const headers = data[0]; // Row 1: Name, Address, City, Pincode, State, Contact, Order ID, Utr
    const orders = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      orders.push({
        name:    row[0] || '',
        address: row[1] || '',
        city:    row[2] || '',
        pincode: row[3] || '',
        state:   row[4] || '',
        contact: row[5] || '',
        orderId: row[6] || '',
        utr:     row[7] || ''
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', orders: orders }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
