import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { TabComponent } from './tab/tab.component';
import { EmptyDataComponent } from './empty-data/empty-data.component';
import { ChannelItemComponent } from './channel-item/channel-item.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ChannelsFilterComponent } from './channels-filter/channels-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowcaseComponent,
    TabComponent,
    EmptyDataComponent,
    ChannelItemComponent,
    LoadMoreComponent,
    ChannelsFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
