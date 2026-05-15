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
// 4. Click Deploy → Manage Deployments → Edit (pencil icon)
// 5. Set Version to "New version"
// 6. Click Deploy
//
// COLUMNS IN SHEET (Row 1 headers):
// A: Name | B: Address | C: City | D: Pincode | E: State | F: Contact | G: Order ID | H: Utr
// =====================================================

const SHEET_NAME = 'Sheet1';

// Handle GET requests — used for BOTH writing orders AND reading orders
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // CHECK: If orderId parameter exists, this is an ORDER SUBMISSION
    if (e.parameter && e.parameter.orderId) {
      sheet.appendRow([
        e.parameter.name     || '',
        e.parameter.address  || '',
        e.parameter.city     || '',
        e.parameter.pincode  || '',
        e.parameter.state    || '',
        e.parameter.contact  || '',
        e.parameter.orderId  || '',
        e.parameter.utr      || ''
      ]);

      return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Order saved to sheet' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // OTHERWISE: This is a READ request (admin panel syncing orders)
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', orders: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }

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

// Handle POST requests (fallback — kept for compatibility)
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const data = JSON.parse(e.postData.contents);

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
