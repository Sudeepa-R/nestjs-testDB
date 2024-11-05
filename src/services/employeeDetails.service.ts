import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EmployeesDetails } from "src/entities/employee.entitiy";
import { Repository } from "typeorm";

@Injectable()
export class EmployeesDetailsServices{
    constructor(
        @InjectRepository(EmployeesDetails)
        private readonly employeesDetails:Repository<EmployeesDetails>
    ){}

    async saveBulkData(employeeData:EmployeesDetails):Promise<EmployeesDetails>{
        return await this.employeesDetails.save(employeeData)
    }

    async findAll():Promise<EmployeesDetails[]>{
        return await this.employeesDetails.find();
    }

    async findOneEmp(id:number):Promise<EmployeesDetails>{
        return await this.employeesDetails.findOneById(id)
    }

    async updateData(id:number,updatedData:EmployeesDetails):Promise<EmployeesDetails>{
        const res=await this.employeesDetails.update({id:id},updatedData)
        return this.findOneEmp(id);
    }

    async deleteEmp(id:number):Promise<boolean>{
        const res=await this.employeesDetails.delete(id);
        return res.affected>0;
    }

    }