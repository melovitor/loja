import { Module } from '@nestjs/common';
import { UserModule } from './Users/user.module';
import { ProductModule } from './Products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './Config/postgres.config.service';

@Module({
  imports: [
    UserModule,
    ProductModule,
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
})
export class AppModule {}
