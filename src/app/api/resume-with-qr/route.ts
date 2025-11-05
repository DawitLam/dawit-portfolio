import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, rgb } from 'pdf-lib'
import QRCode from 'qrcode'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    // Read the original resume PDF
    const resumePath = path.join(process.cwd(), 'public', 'Dawit_Gulta_resume.pdf')
    const existingPdfBytes = fs.readFileSync(resumePath)

    // Load the PDF
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    
    // Get the first page
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()

    // Generate QR code for the portfolio URL
    const portfolioUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dawit.vercel.app'
    const qrCodeBuffer = await QRCode.toBuffer(portfolioUrl, {
      type: 'png',
      width: 150,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })

    // Embed the QR code image
    const qrCodeImage = await pdfDoc.embedPng(qrCodeBuffer)
    
    // Calculate position for QR code (top-right corner)
    const qrSize = 80
    const margin = 20
    const qrX = width - qrSize - margin
    const qrY = height - qrSize - margin

    // Draw the QR code on the first page
    firstPage.drawImage(qrCodeImage, {
      x: qrX,
      y: qrY,
      width: qrSize,
      height: qrSize,
    })

    // Add a small label below the QR code
    firstPage.drawText('Scan for Portfolio', {
      x: qrX - 5,
      y: qrY - 15,
      size: 8,
      color: rgb(0.3, 0.3, 0.3),
    })

    // Serialize the PDF
    const modifiedPdfBytes = await pdfDoc.save()

    // Return the modified PDF
    return new NextResponse(modifiedPdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Dawit_Gulta_Resume_with_QR.pdf"',
      },
    })

  } catch (error) {
    console.error('Error generating resume with QR code:', error)
    return NextResponse.json(
      { error: 'Failed to generate resume with QR code' },
      { status: 500 }
    )
  }
}