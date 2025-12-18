import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { formRepo } from './form.repository';

@Module({
  controllers: [FormController],
  providers: [FormService,formRepo]
})
export class FormModule {}
