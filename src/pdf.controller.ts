import { Controller, Post, Body, Header, Res } from '@nestjs/common';
import PdfGeneratorDto from './dto/pdf-generator-dto';
import * as puppeteer from 'puppeteer';

@Controller()
export class PdfController {
  @Post("/pdfs")
  @Header('Content-Type', 'application/pdf')
  async generatePdf(@Body() pdfGeneratorDto: PdfGeneratorDto, @Res() response) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(pdfGeneratorDto.html)
    const buffer = await page.pdf()
    await browser.close()

    response.set({
        'Content-Disposition': `attachment; filename=${new Date().getTime()}.pdf`
    })
    response.send(buffer)
  }
}
