import { IsNotEmpty } from 'class-validator'

export default class PdfGeneratorDto {
  @IsNotEmpty()
  html = ''

  format = ''
}
