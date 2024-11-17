import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuration du CORS
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,POST,PATCH,PUT,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
