# html2pdf [![Build Status](https://travis-ci.org/Frederick-S/html2pdf.svg?branch=master)](https://travis-ci.org/Frederick-S/html2pdf) [![Build status](https://ci.appveyor.com/api/projects/status/91sq693rev5u7cn5/branch/master?svg=true)](https://ci.appveyor.com/project/Frederick-S/html2pdf/branch/master) [![Maintainability](https://api.codeclimate.com/v1/badges/b9451bfc5cdafca7d216/maintainability)](https://codeclimate.com/github/Frederick-S/html2pdf/maintainability)

## Example
### Request
```http
POST /pdfs HTTP/1.1
Host: host
Content-Type: application/json

{
	"html": "<h1>Hello, World!</h1>",
	"format": "A4"
}
```

## Getting started
```
docker run -p 3000:3000 xiaodanmao/html2pdf
```

## License
[MIT](LICENSE)
