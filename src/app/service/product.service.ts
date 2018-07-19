import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from '../models/product.model';


@Injectable({
  providedIn : 'root', 
})

export class ProductService {

  constructor(private _http:HttpClient) { }
  url = 'https://my.api.mockaroo.com/product_catalog.json?key=866ae800';

  getProducts(): Observable<any> {
    return this._http.get(this.url);
  }

}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   constructor(private _http: HttpClient) { }
//   url = 'https://my.api.mockaroo.com/product_catalog.json?key=866ae800';

//   getProducts(): Observable<any> {
//     return this._http.get(this.url);
//   }


// }
