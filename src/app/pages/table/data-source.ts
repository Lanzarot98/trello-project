import { DataSource } from '@angular/cdk/collections';

import { Product } from './../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProduct extends DataSource<Product> {

  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.originalData = products;
    this.data.next(products);
  }

  getTotal() {
    const products = this.data.getValue();
    return products
        .map(i => i.price)
        .reduce((price,total) => price + total, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex(item => item.id === id); // findIndex devuelve un -1 si no encuentra
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes, // unirlo con los cambios
      }
      this.data.next(products); // transmitir ese cambio a traves del observable
    }
  }

  find(query: string) {
    // const products = this.data.getValue(); // no mutar, pues se estaría buscando a partir del filtro y se debe buscar a partir del array completo de datos

    const newProducts = this.originalData.filter( item => item.title.toLowerCase().includes( query.toLowerCase() ) );
    this.data.next(newProducts);
  }

  disconnect() {  }

}
