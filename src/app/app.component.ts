import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataState } from './enum/DataState';
import { AppState } from './interface/app-state';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'web-app';
  appState$: Observable<AppState<Product[]>>;

  constructor(private productService: ProductService) { }

  
  ngOnInit(): void {
    this.appState$ = this.productService.products$
      .pipe(
        map(resp => {
          return { dataState: DataState.LOADED, data: [...[], resp] }
        }),
        startWith({ dataState: DataState.LOADING })
      )
  }


}
