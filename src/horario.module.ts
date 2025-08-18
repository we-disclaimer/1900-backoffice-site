import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HorarioSchema } from './admin/resources/horario.resource.js';
import { HorarioController } from './horario.controller.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Horario', schema: HorarioSchema },
    ]),
  ],
  controllers: [HorarioController],
})
export class HorarioModule {}
