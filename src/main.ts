import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';


const httpsOptions = {
  key: fs.readFileSync('./cert/key.pem'),
  cert: fs.readFileSync('./cert/cert.pem')
};



async function bootstrap() {
  //const app = await NestFactory.create(AppModule);  

  const app =  await NestFactory.create(AppModule, {
    httpsOptions,
  });


  
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Anupam Seed Project')
    .setDescription('Seed project description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
