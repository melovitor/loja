import { Module } from '@nestjs/common';
import { UserModule } from './Users/user.module';
import { ProductModule } from './Products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './Config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
})
export class AppModule {}
