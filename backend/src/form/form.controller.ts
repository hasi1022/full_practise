import { Controller ,Post,Body} from '@nestjs/common';
import { FormService } from './form.service';
import { formDto } from './dto/form.dto';

@Controller('form')
export class FormController {
    constructor(private formservice:FormService){}
    @Post('create')
    create(@Body()data:formDto){
          return this.formservice.create(data);
    }

}
