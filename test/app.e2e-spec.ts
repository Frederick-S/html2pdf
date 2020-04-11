import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/pdfs (POST)', () => {
    return request(app.getHttpServer())
      .post('/pdfs')
      .send({
        html: '<h1>Hello</h1>',
        format: 'A4'
      })
      .expect(201)
      .expect('Content-Type', 'application/pdf')
  })
})
