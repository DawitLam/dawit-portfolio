import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import QRCode from 'qrcode'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([612, 792]) // Standard letter size
    
    // Get fonts
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
    
    // Generate QR code
    const websiteUrl = 'https://dawitgulta.vercel.app'
    const qrCodeDataUrl = await QRCode.toDataURL(websiteUrl, {
      width: 120,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })
    
    // Convert QR code to PNG bytes
    const qrCodeBytes = Buffer.from(qrCodeDataUrl.split(',')[1], 'base64')
    const qrCodeImage = await pdfDoc.embedPng(qrCodeBytes)
    
    // Page dimensions
    const { width, height } = page.getSize()
    
    // Draw QR code at top right corner
    page.drawImage(qrCodeImage, {
      x: width - 130,
      y: height - 130,
      width: 100,
      height: 100,
    })
    
    // Add QR code label
    page.drawText('Scan for Full Portfolio', {
      x: width - 130,
      y: height - 138,
      size: 8,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    page.drawText('LinkedIn | GitHub | Projects', {
      x: width - 130,
      y: height - 148,
      size: 7,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
    })
    
    // Header
    page.drawText('DAWIT LAMBEBO GULTA', {
      x: 50,
      y: height - 80,
      size: 24,
      font: helveticaBoldFont,
      color: rgb(0.2, 0.2, 0.2),
    })
    
    page.drawText('Data Scientist & ML Engineer', {
      x: 50,
      y: height - 110,
      size: 16,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    // Contact Info
    page.drawText('Email: dawitgulta@gmail.com', {
      x: 50,
      y: height - 140,
      size: 12,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    page.drawText('LinkedIn: linkedin.com/in/dawit-lambebo-gulta/', {
      x: 50,
      y: height - 155,
      size: 12,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    page.drawText('Location: Toronto, Canada', {
      x: 50,
      y: height - 170,
      size: 12,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    // Education Section
    let yPosition = height - 220
    page.drawText('EDUCATION', {
      x: 50,
      y: yPosition,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(0.2, 0.2, 0.2),
    })
    
    yPosition -= 25
    page.drawText('Master of Arts (MA) - York University, Toronto', {
      x: 50,
      y: yPosition,
      size: 12,
      font: helveticaBoldFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    yPosition -= 15
    page.drawText('Graduated: June 2025', {
      x: 50,
      y: yPosition,
      size: 11,
      font: helveticaFont,
      color: rgb(0.4, 0.4, 0.4),
    })
    
    // Experience Section
    yPosition -= 40
    page.drawText('EXPERIENCE', {
      x: 50,
      y: yPosition,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(0.2, 0.2, 0.2),
    })
    
    yPosition -= 25
    page.drawText('Research Assistant - Sunnybrook Research Institute', {
      x: 50,
      y: yPosition,
      size: 12,
      font: helveticaBoldFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    yPosition -= 15
    page.drawText('May 2024 - July 2025', {
      x: 50,
      y: yPosition,
      size: 11,
      font: helveticaFont,
      color: rgb(0.4, 0.4, 0.4),
    })
    
    yPosition -= 15
    page.drawText('• Developed ML models for spine fracture risk prediction', {
      x: 70,
      y: yPosition,
      size: 11,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    yPosition -= 15
    page.drawText('• Processed medical imaging data using Python and deep learning', {
      x: 70,
      y: yPosition,
      size: 11,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    // Skills Section
    yPosition -= 40
    page.drawText('TECHNICAL SKILLS', {
      x: 50,
      y: yPosition,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(0.2, 0.2, 0.2),
    })
    
    yPosition -= 25
    page.drawText('Programming: Python, R, SQL, JavaScript, TypeScript', {
      x: 50,
      y: yPosition,
      size: 11,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    yPosition -= 15
    page.drawText('ML/AI: TensorFlow, PyTorch, Scikit-learn, OpenCV', {
      x: 50,
      y: yPosition,
      size: 11,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    yPosition -= 15
    page.drawText('Data: Pandas, NumPy, Matplotlib, Tableau, Power BI', {
      x: 50,
      y: yPosition,
      size: 11,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    yPosition -= 15
    page.drawText('Cloud: AWS, Azure, Google Cloud Platform', {
      x: 50,
      y: yPosition,
      size: 11,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    // Publications Section
    yPosition -= 40
    page.drawText('PUBLICATIONS', {
      x: 50,
      y: yPosition,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(0.2, 0.2, 0.2),
    })
    
    yPosition -= 25
    page.drawText('• "Machine Learning for Spine Fracture Risk Assessment"', {
      x: 70,
      y: yPosition,
      size: 11,
      font: helveticaFont,
      color: rgb(0.3, 0.3, 0.3),
    })
    
    yPosition -= 15
    page.drawText('  Medical Imaging Conference, 2025', {
      x: 70,
      y: yPosition,
      size: 10,
      font: helveticaFont,
      color: rgb(0.4, 0.4, 0.4),
    })
    
    // Footer note
    page.drawText('Scan QR code for complete portfolio with LinkedIn, GitHub, publications, and interactive projects', {
      x: 50,
      y: 50,
      size: 9,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
    })
    
    page.drawText('Portfolio: dawitgulta.vercel.app', {
      x: 50,
      y: 35,
      size: 9,
      font: helveticaFont,
      color: rgb(0.4, 0.4, 0.4),
    })
    
    // Generate PDF bytes
    const pdfBytes = await pdfDoc.save()
    
    // Return the PDF
    return new NextResponse(Buffer.from(pdfBytes), {
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