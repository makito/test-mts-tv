import { Component, Input, OnInit } from '@angular/core';

import { IChannel } from '../entities/channel.interface';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss'],
})
export class ChannelItemComponent implements OnInit {
  @Input()
  data!: IChannel;

  get background(): string {
    return this.data.picture.backgrounds[0];
  }

  constructor() {}

  ngOnInit(): void {}
}
