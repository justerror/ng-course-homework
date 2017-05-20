import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { hotels$, cities$ } from './../data/data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onChoosingCity: EventEmitter<number> = new EventEmitter();
  @Output() onSelectHotel: EventEmitter<Hotel> = new EventEmitter();

  public isHotelsLoad = false;
  public isCitiesLoad = false;

  public content: any;
  public hotels$: Observable<Hotel[]> = hotels$;
  public hotels: Hotel[];
  public cities$: Observable<City[]> = cities$;
  public cities: City[];
  public searchTerm: string;
  public selectedSearchTerm: number;
  public selectedHotelIndex: number;

  public constructor() {
    hotels$.subscribe((hotels:Hotel[]) => {
      this.hotels = hotels;
    });
    cities$.subscribe((cities:City[]) => {
      this.cities = cities;
      this.onChoosingCity.emit(this.selectedSearchTerm)
    })
  }

  public ngOnInit() {

  }

  public changeSearchTerm(value: string, index: number): void {
   this.searchTerm = value.toLowerCase();
   this.selectedSearchTerm = index;
   this.selectedHotelIndex = null;
   this.onChoosingCity.emit(this.selectedSearchTerm)
   this.onSelectHotel.emit(null)
  }

  public SelectHotel(hotel: Hotel, i:number): void {
    this.selectedHotelIndex = i;
    this.onSelectHotel.emit(hotel)
  }
}
