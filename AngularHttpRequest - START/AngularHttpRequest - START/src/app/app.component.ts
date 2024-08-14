import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './model/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHttpRequest';
  allProducts: Product[] = [];
  isFetching: boolean = false;

  ngOnInit() {
    this.fetchProducts();
  }

  onProductsFetch() {
    this.fetchProducts();
  }
  constructor(private http: HttpClient) {}
  onProductCreate(products: { pName: string; desc: string; price: string }) {
    // console.log(products);

    const headers = new HttpHeaders({ myHeader: 'Linademy' });
    this.http
      .post<{ name: string }>(
        'https://firstangularbylinademy-default-rtdb.firebaseio.com/products.json',
        products,
        { headers: headers }
      )
      .subscribe((res) => {
        // console.log(res);
      });
  }

  private fetchProducts() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Product }>(
        'https://firstangularbylinademy-default-rtdb.firebaseio.com/products.json'
      )
      .pipe(
        map((res) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        })
      )
      .subscribe((products) => {
        // console.log(products);
        this.allProducts = products;
        this.isFetching = false;
      });
  }

  onDeleteProduct(id: string) {
    this.http
      .delete(
        'https://firstangularbylinademy-default-rtdb.firebaseio.com/products/' +
          id +
          '.json'
      )
      .subscribe();
  }

  onDeleteAllProduct() {
    this.http
      .delete(
        'https://firstangularbylinademy-default-rtdb.firebaseio.com/products.json/'
      )
      .subscribe();
  }
}
