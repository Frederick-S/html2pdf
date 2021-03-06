import { Controller, Post, Body, Header, Res, UsePipes, ValidationPipe, Get } from '@nestjs/common'
import PdfGeneratorDto from './dto/pdf-generator-dto'
import * as puppeteer from 'puppeteer'
import { PDFFormat } from 'puppeteer'

@Controller()
export class AppController {
  @Get('/')
  hello(): string {
    return 'hello'
  }

  @Post('/pdfs')
  @Header('Content-Type', 'application/pdf')
  @UsePipes(new ValidationPipe({ transform: true }))
  async generatePdf(@Body() pdfGeneratorDto: PdfGeneratorDto, @Res() response) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
    })
    const page = await browser.newPage()
    await page.setContent(pdfGeneratorDto.html)
    const buffer = await page.pdf({
      format: pdfGeneratorDto.format as PDFFormat || 'Letter'
    })
    await browser.close()

    response.set({
        'Content-Disposition': `attachment filename="${new Date().getTime()}.pdf"`
    })
    response.send(buffer)
  }
}
