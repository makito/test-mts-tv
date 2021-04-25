import { Component, Input, OnInit } from '@angular/core';

import { IChannelsData } from '../entities/channels-data.interface';
import { IChannel } from '../entities/channel.interface';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  @Input()
  listChannels!: IChannelsData;

  get channels(): IChannel[] {
    return this.listChannels?.channelDetails;
  }

  constructor() {}

  ngOnInit(): void {}

  trackByFn(index: number, item: IChannel): string {
    return item.name;
  }
}
