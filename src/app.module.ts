import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; 
 
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
 
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/authentication'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    UsersModule
     ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
