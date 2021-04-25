import { Component, OnInit } from '@angular/core';

import { GenreName } from '../entities/genre.enum';

@Component({
  selector: 'app-channels-filter',
  templateUrl: './channels-filter.component.html',
  styleUrls: ['./channels-filter.component.scss'],
})
export class ChannelsFilterComponent implements OnInit {
  types = GenreName;

  get list(): string[] {
    return Object.values(this.types);
  }

  constructor() {}

  ngOnInit(): void {}
}
