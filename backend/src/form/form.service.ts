import { BadRequestException, Injectable } from '@nestjs/common';
import { formRepo } from './form.repository';
import { formDto } from './dto/form.dto';
import  * as bcrypt from "bcrypt";


@Injectable()
export class FormService {
    constructor(private formRepo:formRepo){}
    async create(data:formDto){
        try{
                   if(!data){
            return new BadRequestException('No Data Found Please fill the form')
        }
        data.password=await bcrypt.hash(data.password,10)
        return this.formRepo.createForm(data)

        }catch(err){
            return new Error(err)
        }
    }
}
