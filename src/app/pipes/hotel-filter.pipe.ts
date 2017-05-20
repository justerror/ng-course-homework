import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], searchterm: string): Hotel[] {
    if(!searchterm) {
      return hotels;
    }
    return hotels.filter( (hotel: Hotel) => hotel.city.toLowerCase().includes(searchterm) );
  }

}
