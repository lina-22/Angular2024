import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      id: '1',
      product: 'a name',
      productViews: 100,
      price: '100',
      available: 'Available',
      image: 'assets/lilium.png',
    },
    {
      id: '2',
      product: 'another name',
      productViews: 200,
      price: '100',
      available: 'Not Available',
      image: 'assets/desert.png',
    },
    {
      id: '3',
      product: 'another name',
      productViews: 200,
      price: '100',
      available: 'Available',
      image: 'assets/lilium.png',
    },
    {
      id: '4',
      product: 'another name',
      productViews: 200,
      price: '100',
      available: 'Available',
      image: 'assets/desert.png',
    },
    {
      id: '5',
      product: 'another name',
      productViews: 200,
      price: '100',
      available: 'Not Available',
      image: 'assets/lilium.png',
    },
  ];
}
