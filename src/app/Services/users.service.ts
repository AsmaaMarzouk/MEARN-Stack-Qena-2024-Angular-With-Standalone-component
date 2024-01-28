import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Model/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  http={};
  constructor(private httpClient:HttpClient) {
    this.http={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }
   }
  addNewUser(user:Iuser):Observable<Iuser>{
    return this.httpClient.post<Iuser>(`${environment.baseURL}/users`,JSON.stringify(user),this.http);
  }
}
