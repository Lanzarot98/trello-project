import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  // products: Product[] = [];
  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true });

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    })

    // escuchar los cambios:
    this.input.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
        this.dataSource.find(value);
        // console.log(value);
      } )
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }

}
