import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  OnInit,
} from '@angular/core';

import { GetDataService } from './get-data.service';
import { IChannelsData } from './entities/channels-data.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('showcase', { read: ViewContainerRef })
  private _showcase!: ViewContainerRef;

  @ViewChild('emptyTpl', { read: TemplateRef })
  private _emptyTpl!: TemplateRef<any>;

  @ViewChild('chowcaseTpl', { read: TemplateRef })
  private _chowcaseTpl!: TemplateRef<any>;

  private _pageSize = 24;

  private _page = 0;

  data: IChannelsData = {
    total: '0',
    channelDetails: [],
  };

  get hideLoadMore(): boolean {
    return this.data.channelDetails.length < parseInt(this.data.total, 10);
  }

  constructor(private _dataServise: GetDataService) {}

  onChangeSection(type: string) {
    if (!this._showcase) {
      return;
    }

    this._showcase.detach();
    this.resetData();

    if (type === 'channels') {
      this.loadData();
      this._showcase.insert(this._chowcaseTpl.createEmbeddedView(null));
    } else {
      this._showcase.insert(this._emptyTpl.createEmbeddedView(null));
    }
  }

  ngOnInit(): void {}

  loadData() {
    this._dataServise.loadData(this._page, this._pageSize).subscribe((data) => {
      this.data.total = data.total;
      this.data.channelDetails = this.data.channelDetails.concat(
        data.channelDetails
      );
      this._page++;
    });
  }

  onClickLoadMore() {
    this.loadData();
  }

  resetData() {
    this.data.total = '0';
    this.data.channelDetails = [];
  }
}
