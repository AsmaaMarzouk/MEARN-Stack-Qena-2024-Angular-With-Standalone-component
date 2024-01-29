import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenService {
  // boolean = true => login || false => logout

  user: BehaviorSubject<boolean>;

  constructor() {
    this.user = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  login(userEmail: string, userPassword: string) {
    let usertoken = '654321';
    localStorage.setItem('userToken', usertoken);
    this.user.next(true);
  }
  logout() {
    localStorage.removeItem('userToken');
    this.user.next(false);
  }

  get isUserLogged() {
    return localStorage.getItem('userToken') ? true : false;
  }
  getUserState():Observable<boolean> {

    return this.user.asObservable();

  }
}
