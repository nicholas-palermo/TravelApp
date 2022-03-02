import { Injectable } from '@angular/core';
import { Place } from './place.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] =[
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://img.theculturetrip.com/wp-content/uploads/2016/01/799px-Typical_Paris_Apartment1.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://images.pexels.com/photos/4181348/pexels-photo-4181348.jpeg?cs=srgb&dl=pexels-miha-skovoroda-4181348.jpg&fm=jpg',
      99.99
    )
  ];
  get places() {
    //eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }
  getPlace(id: string) {
    //eslint-disable-next-line no-underscore-dangle
    return {...this._places.find(p => p.id === id)};
  }
  //eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {}
}
