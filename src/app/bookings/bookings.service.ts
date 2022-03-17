import { Injectable } from '@angular/core';

import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'abc'
    }
  ]

  getBookings() {
    //eslint-disable-next-line no-underscore-dangle
    return [...this._bookings];
  }
}
