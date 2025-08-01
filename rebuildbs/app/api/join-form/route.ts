import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, experience, goals } = await req.json();

    // Hardcoded path to service account key (replace with your own path)
    const credentials = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'credentials/google-service-account.json'), 'utf8')
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Load spreadsheet ID from environment variable
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    
    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID environment variable is not set');
    }
    const range = 'Sheet1!A:F'; // Adjust as needed

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, email, phone, experience, goals, new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 });
  }
}