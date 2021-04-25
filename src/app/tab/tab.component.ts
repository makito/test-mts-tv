import { Component, Input, OnInit } from '@angular/core';

import { Tab } from '../entities/tab.class';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input()
  data!: Tab;

  constructor() {}

  ngOnInit(): void {}
}
