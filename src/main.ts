import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors:{
      origin:['http://localhost:3000','179.177.135.197','https://projectblueboxfront.herokuapp.com']
    },
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Interceptor
  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  
  await app.listen(3001);
}
bootstrap();
