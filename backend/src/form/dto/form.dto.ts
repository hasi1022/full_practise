import { IsNotEmpty,IsEmail,MaxLength,IsString,IsNumberString,Length,Max,IsInt,Min } from "class-validator";
export class formDto{
    
        @IsNotEmpty()
        @IsString()
        name:string;
        
        @IsNotEmpty()
        @IsEmail()
        email:string;
        
        @IsNotEmpty()
        gender:string;
        
        @IsNotEmpty()
        @IsString({each:true})
        designation:string[];
        
        @IsNotEmpty()
        mobile:number;
    
        @IsNotEmpty()
        class:string;
        
        @IsNotEmpty()
        uniform:string;
        
        @IsNotEmpty()
        birthDate:string;
    
        @IsNotEmpty()
        address:string;
        
        @IsNotEmpty()
        password:string;
    
}