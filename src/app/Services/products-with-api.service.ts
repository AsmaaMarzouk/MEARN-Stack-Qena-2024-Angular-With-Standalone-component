import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  constructor(private httpclient:HttpClient) { }
  getAllPrds():Observable<Iproduct[]>{

    return this.httpclient.get<Iproduct[]>(`http://localhost:3000/products`)
  }

  getPrdByID(prdID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`http://localhost:3000/products?id=${prdID}`);

  }


}
