import { Module } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { FaqsResolver } from './faqs.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Faq, FaqSchema } from './entities/faq.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Faq.name,
        schema: FaqSchema,
      },
    ]),
  ],
  providers: [FaqsResolver, FaqsService],
  exports: [FaqsService],
})
export class FaqsModule {}
