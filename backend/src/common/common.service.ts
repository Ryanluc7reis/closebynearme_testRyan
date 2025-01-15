import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  createSlug(name: string) {
    return name.toLowerCase().replace(/ /g, '-');
  }
}
