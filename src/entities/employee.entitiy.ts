import { Exclude, Expose } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum roles{
    ADMIN,ENGINEER,INTERN
}
@Entity({name:"Emploees"})
export class EmployeesDetails{
    @Exclude()
    @PrimaryGeneratedColumn({type:'int',name:"Id"})
    id:number

    @Expose()
    @Column({name:"Name",type:'varchar',length:50, nullable:true})
    name:string

    @Expose()
    @Column({name:"email",type:'varchar',length:50,nullable:false,unique:true})
    email:string

    @Expose()
    @Column({name:"Role",type:'varchar',length:50,nullable:false})
    role:roles

    @Expose()
    @Column({name:"Salary",type:'varchar',length:50,nullable:true,default:33000})
    salary:number
   
    
}
