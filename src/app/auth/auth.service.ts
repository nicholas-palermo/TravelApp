import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;

  get userIsAuthenticated(){
    //es-lint-disable-next-line no-underscore-dangle
    return this._userIsAuthenticated;
  }

  //eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {}

  login() {
    //es-lint-disable-next-line no-underscore-dangle
    this._userIsAuthenticated = true;
  }

  logout() {
    //es-lint-disable-next-line no-underscore-dangle
    this._userIsAuthenticated = false;
  }
}
