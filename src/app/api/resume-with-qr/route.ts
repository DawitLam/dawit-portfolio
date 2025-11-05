import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, rgb } from 'pdf-lib'
import QRCode from 'qrcode'

export async function GET(request: NextRequest) {
  try {
    // For now, just redirect to the original resume
    // We'll implement the QR code feature after deployment
    const portfolioUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'https://dawitgulta.vercel.app'
    
    // Generate a simple response that redirects to original resume
    return NextResponse.redirect(new URL('/Dawit_Gulta_resume.pdf', request.url))

  } catch (error) {
    console.error('Error generating resume with QR code:', error)
    return NextResponse.json(
      { error: 'Failed to generate resume with QR code' },
      { status: 500 }
    )
  }
}