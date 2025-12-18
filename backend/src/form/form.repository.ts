import { formEntity } from "src/utils/form.entity";
import { DataSource,Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { formDto } from "./dto/form.dto";
import { FormService } from "./form.service";

@Injectable()
export class formRepo extends Repository<formEntity>{
    constructor(private datasource:DataSource){
        super(formEntity,datasource.createEntityManager())
    }
    createForm(data:formDto){
        const form = this.create(data);
        return this.save(form)

    }
}