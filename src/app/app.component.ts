import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { hotels$, cities$ } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hot Weather Widget';
  public currentCity: number;
  public currentHotel: Hotel;

  public setChoosenCity(cityIndex: number): void {
    this.currentCity = cityIndex
  }

  public setChoosenHotel(hotel: Hotel): void {
    this.currentHotel = hotel
  }
}
