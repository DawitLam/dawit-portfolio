import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, rgb } from 'pdf-lib'
import QRCode from 'qrcode'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    // For now, just redirect to the original resume
    // We'll implement the QR code feature after deployment
      const resumePath = path.join(process.cwd(), 'public', 'Gulta,Dawit_Resume.pdf');
    
    // Generate a simple response that redirects to original resume
    return NextResponse.redirect(new URL('/Gulta,Dawit_Resume.pdf', request.url))

  } catch (error) {
    console.error('Error generating resume with QR code:', error)
    return NextResponse.json(
      { error: 'Failed to generate resume with QR code' },
      { status: 500 }
    )
  }
}