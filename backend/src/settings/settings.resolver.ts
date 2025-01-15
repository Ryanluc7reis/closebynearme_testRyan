import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SettingsService } from './settings.service';
import { Setting } from './entities/setting.entity';
import { UpdateSettingInput } from './dto/update-setting.input';
import { Inject } from '@nestjs/common';

@Resolver(() => Setting)
export class SettingsResolver {
  @Inject()
  private readonly service: SettingsService;

  @Query(() => Setting, { name: 'getSettings' })
  async findOne() {
    let settings = await this.service.findOne();
    if (!settings) {
      await this.service.create();
      settings = await this.service.findOne();
    }
    return settings;
  }

  @Mutation(() => String)
  updateSetting(@Args('input') input: UpdateSettingInput) {
    return this.service.update(input);
  }
}
