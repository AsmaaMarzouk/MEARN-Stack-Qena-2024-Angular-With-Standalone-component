import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Model/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  constructor(private httpclient:HttpClient) { }
  // getAllPrds():Observable<Iproduct[]>{

  //   return this.httpclient.get<Iproduct[]>(`http://localhost:3000/products`)
  // }

  // // url param
  // getPrdByID(prdID:number):Observable<Iproduct>{
  //   return this.httpclient.get<Iproduct>(`http://localhost:3000/products/${prdID}`);

  // }
  // // query string

  // searchPrdWithMaterial(mat:string):Observable<Iproduct[]>{
  //   return this.httpclient.get<Iproduct[]>(`http://localhost:3000/products?Material=${mat}`)


  // }

  // After add enviroment
  getAllPrds():Observable<Iproduct[]>{

    return this.httpclient.get<Iproduct[]>(`${environment.baseURL}/products`)
  }

  // url param
  getPrdByID(prdID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.baseURL}/products/${prdID}`);

  }
  // query string

  searchPrdWithMaterial(mat:string):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.baseURL}/products?Material=${mat}`)


  }
}
