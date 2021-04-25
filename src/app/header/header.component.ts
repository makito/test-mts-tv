import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

import { Tab } from '../entities/tab.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  sections: Tab[] = [
    new Tab('First', 'num1'),
    new Tab('Second', 'num2'),
    new Tab('Телеканалы', 'channels'),
  ];

  activeTab!: Tab;

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    const savedType = localStorage.getItem('tv-section');
    const tab = this.sections.find((item) => item.type === savedType);
    this.activeTab = tab || this.sections[0];
    this.activeTab.selected = true;
  }

  trackByFn(index: number, item: Tab): string {
    return item.title;
  }

  onTabSelect(item: Tab) {
    if (item === this.activeTab) {
      return;
    }

    this.activeTab.selected = false;
    item.selected = true;
    this.activeTab = item;
    localStorage.setItem('tv-section', this.activeTab.type);
    this.change.emit(this.activeTab.type);
  }

  ngAfterViewInit(): void {
    this.change.emit(this.activeTab.type);
  }
}
