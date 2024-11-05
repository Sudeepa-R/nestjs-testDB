import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EmployeesDetails } from "src/entities/employee.entitiy";
import { EmployeesDetailsServices } from "src/services/employeeDetails.service";


@Controller('EmployeeDetails')
export class employeeController{
    constructor(
        private readonly employeesDetailsServices:EmployeesDetailsServices
    ){}

    @Get()
    async findAllEmp():Promise<EmployeesDetails[]>{
        return await this.employeesDetailsServices.findAll()
    }

    @Get(':id')
    async findOneEmp(@Param('id')id:number):Promise<EmployeesDetails>{
        return await this.employeesDetailsServices.findOneEmp(id)
    }

    @Post()
    async saveData(@Body() empData:EmployeesDetails):Promise<EmployeesDetails>{
        return await this.employeesDetailsServices.saveBulkData(empData);
    }

    @Put(':id')
    async updateData(@Param('id')id:number,@Body() updatedData:EmployeesDetails):Promise<EmployeesDetails>{
        return await this.employeesDetailsServices.updateData(id,updatedData);
    }

    @Delete(':id')
    async deleteData(@Param('id') id:number):Promise<EmployeesDetails | string>{
        const res=await this.employeesDetailsServices.deleteEmp(id)
        if(res){
            return this.findOneEmp(id)
        }
        return "Error while deleting the data!!"
    }

}