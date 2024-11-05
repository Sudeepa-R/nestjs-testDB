import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employeeController } from 'src/controllers/employeeDetails.controllers';
import { EmployeesDetails } from 'src/entities/employee.entitiy';
import { EmployeesDetailsServices } from 'src/services/employeeDetails.service';

@Module({
    imports:[TypeOrmModule.forFeature([EmployeesDetails])],
    controllers:[employeeController],
    providers:[EmployeesDetailsServices]
})
export class IocModule {}
