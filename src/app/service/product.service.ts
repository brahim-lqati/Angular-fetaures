import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { tap, catchError } from 'rxjs/operators';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url = 'http://localhost:5000/api/products';
  constructor(private http: HttpClient) { }

  products$ = <Observable<Product[]>> this.http.get(this.url)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

    product$ = (id:string) => <Observable<Product>> this.http.get(`${this.url}/${id}`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

    addProduct$ = (product:Product) => <Observable<Product>> this.http.post(this.url, product);


    serachObservabele$ = new Observable<Product>();  
    filter$ = (search: string, data: Array<Product>) => new Observable<Array<Product>>(
      subscriber => {
        console.log(search);
          subscriber.next(
            search === '' ? data.filter(pr => pr.title.includes(search)) : data
          );
          subscriber.complete();
      }
    )
    .pipe(
      tap(console.log)
    )


  handleError(): Observable<never> {
    return throwError('Error not implemented')
  }

  addTestFunction(): void {
    console.log('hello my friend');
  }
}
