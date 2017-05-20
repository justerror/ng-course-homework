import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const hotels: Hotel[] = [
  {
    "name": 'Jubily Hotel',
    "city": 'Minsk',
    "info": 'Nice 4* hotel',
    "images": [
      'http://lorempixel.com/400/200/city/',
      'http://lorempixel.com/400/200/nightlife/'
    ],
    "tel": 375251234567,
    "followers": 210,
    "following": 45
  },
  {
    "name": 'Prezident Hotel',
    "city": 'Minsk',
    "info": 'Best 4* hotel',
    "images": [
      'http://lorempixel.com/200/150/city/',
      'http://lorempixel.com/200/200/nightlife/'
    ],
    "tel": 375299974949,
    "followers": 2110,
    "following": 453
  },
  {
    "name": 'Cheap Hotel',
    "city": 'Minsk',
    "info": 'Not so good 2* hotel',
    "images": [
      'http://lorempixel.com/350/200/city/',
      'http://lorempixel.com/400/200/nightlife/'
    ],
    "tel": 375334565464,
    "followers": 1,
    "following": 0
  },
  {
    "name": 'Favorite Hotel',
    "city": 'Kiev',
    "info": 'Nice 3* hotel',
    "images": [
      'http://lorempixel.com/400/200/city/',
      'http://lorempixel.com/400/200/nightlife/'
    ],
    "tel": 3752312524567,
    "followers": 40,
    "following": 14
  },
  {
    "name": 'Grand Hotel',
    "city": 'Kiev',
    "info": 'Not so bad 4* hotel',
    "images": [
      'http://lorempixel.com/500/200/city/',
      'http://lorempixel.com/300/150/nightlife/'
    ],
    "tel": 3752321324567,
    "followers": 4130,
    "following": 134
  },
  {
    "name": 'Best Hotel',
    "city": 'Sochi',
    "info": 'Nice 5* hotel',
    "images": [
      'http://lorempixel.com/500/300/city/',
      'http://lorempixel.com/100/100/nightlife/'
    ],
    "tel": 375221257567,
    "followers": 401,
    "following": 124
  },
]

const cities: City[] = [
  {
    "city": 'Minsk',
    "temperatures": [17, 20]
  },
  {
    "city": 'Kiev',
    "temperatures": [15, 17]
  },
  {
    "city": 'Sochi',
    "temperatures": [25, 27]
  }
]

export const hotels$: Observable<Hotel[]> = Observable.of(hotels).delay(2000);
export const cities$: Observable<City[]> = Observable.of(cities).delay(2000)
