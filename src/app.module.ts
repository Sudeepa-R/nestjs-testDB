import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IocModule } from './ioc/ioc.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesDetails } from './entities/employee.entitiy';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      username:process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_DATABASE,
      port:5432,
      entities:[EmployeesDetails],
      synchronize:true,
      logging:true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017//nestjs-testDB'),
    IocModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
