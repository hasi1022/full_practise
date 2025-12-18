import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty,IsEmail,maxLength,MinLength,IsString, MaxLength } from "class-validator";
import { BeforeInsert,BeforeUpdate } from "typeorm";
import { validateOrReject } from "class-validator";
@Entity("form_entity")
export class formEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @IsNotEmpty()
    @IsString()
    name:string;
    @Column()
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @Column()
    @IsNotEmpty()
    gender:string;
    @Column()
    @IsNotEmpty()
    designation:string;
    @Column({type:'bigint'})
    @IsNotEmpty()
    mobile:number;
    @Column()
    @IsNotEmpty()
    class:string;
    @Column()
    @IsNotEmpty()
    uniform:string;
    @Column()
    @IsNotEmpty()
    birthDate:string;
    @Column()
    @IsNotEmpty()
    address:string;
    @Column()
    @IsNotEmpty()
    password:string;

    @BeforeInsert()
    @BeforeUpdate()
    async validate(){
        await validateOrReject(this)
    }
}