import { Injectable } from '@angular/core';

import { IChannelsData } from './entities/channels-data.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _data!: IChannelsData;

  get empty(): boolean {
    return !this._data;
  }

  constructor() {}

  saveData(data: IChannelsData) {
    this._data = data;
  }

  getData(start: number, count: number): IChannelsData {
    return <IChannelsData>{
      total: this._data.total,
      channelDetails: this._data.channelDetails.slice(
        start * count,
        start * count + count
      ),
    };
  }
}
