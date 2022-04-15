import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products$: Observable<Product[]>;
  
  ngOnInit(): void {

    this.products$ = this.productService.products$;

  }





}
