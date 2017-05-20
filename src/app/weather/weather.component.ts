import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { cities$ } from './../data/data';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() city: number;

  public cities$: Observable<City[]> = cities$;
  public cities: City[];
  public currentCity: City;

  public constructor() {
    cities$.subscribe((cities:City[]) => {
      this.cities = cities;
    })
  }

  public ngOnChanges() {
    if(this.city != undefined) {
      this.currentCity = this.cities[this.city];
    } else {
      this.currentCity = null;
    }
  }

  public ngOnInit() {
  }

}
