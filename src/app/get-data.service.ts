import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { StoreService } from './store.service';
import { IChannelsData } from './entities/channels-data.interface';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private _dataUrl = 'assets/channels.json';

  constructor(private _store: StoreService, private _http: HttpClient) {}

  loadData(start: number, count: number): Observable<IChannelsData> {
    return !this._store.empty
      ? of(this._store.getData(start, count))
      : this._http.get<IChannelsData>(this._dataUrl).pipe(
          map((data) => {
            this._store.saveData(data);
            return this._store.getData(start, count);
          })
        );
  }
}
