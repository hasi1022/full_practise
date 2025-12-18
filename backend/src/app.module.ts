import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { formEntity } from './utils/form.entity';

@Module({
  imports: [FormModule,TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5433,
    username:'postgres',
    password:'12345678',
    database:'newUser2',
    synchronize:true,
    logging:true,
    entities:[formEntity]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
