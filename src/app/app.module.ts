import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HotelFilterPipe } from './pipes/hotel-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherComponent,
    SocialComponent,
    HotelFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
