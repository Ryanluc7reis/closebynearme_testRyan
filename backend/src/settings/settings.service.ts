import { Injectable, OnModuleInit } from '@nestjs/common';
import { UpdateSettingInput } from './dto/update-setting.input';
import { InjectModel } from '@nestjs/mongoose';
import { Setting, SettingDocument } from './entities/setting.entity';
import { PaginateModel } from 'mongoose';

@Injectable()
export class SettingsService implements OnModuleInit {
  constructor(
    @InjectModel(Setting.name)
    private readonly model: PaginateModel<SettingDocument>,
  ) {}

  async onModuleInit() {
    const settings = await this.findOne();
    if (!settings) {
      await this.create();
    }
  }

  async create() {
    await new this.model({
      serviceFee: 49,
    }).save();

    return 'This action adds a new setting';
  }

  async findOne() {
    return (await this.model.find())[0];
  }

  async update({ data }: UpdateSettingInput) {
    const model = await this.findOne();

    await model.updateOne({
      $set: {
        ...data,
      },
    });

    return `Updated`;
  }
}
