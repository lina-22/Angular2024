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
      product: 'Javascript for begainer',
      available: 'Available',
      type:'Premium',
      price: '100',

      author: 'Jhon Heikela',
      duration: 48,
      rating: 3.5,
      description: 'In this course you will learn the fundamentals of javascripts',
      image: 'assets/js.png',
    },
     
    {
      id: '2',
      product: 'Angular for begainer',
      available: 'Available',
      type:'Free',
      price: '100',

      author: 'Jhon Heikela',
      duration: 48,
      rating: 3.5,
      description: 'In this course you will learn the fundamentals of javascripts',
      image: 'assets/angular.png',
    },
    {
      id: '3',
      product: 'Node for begainer',
      available: 'Available',
      type:'Free',
      price: '100',

      author: 'Jhon Heikela',
      duration: 48,
      rating: 3.5,
      description: 'In this course you will learn the fundamentals of javascripts',
      image: 'assets/node.png',
    },
    {
      id: '4',
      product: 'React for begainer',
      available: 'Available',
      type:'Premium',
      price: '100',

      author: 'Jhon Heikela',
      duration: 48,
      rating: 3.5,
      description: 'In this course you will learn the fundamentals of javascripts',
      image: 'assets/react.png',
    },
    {
      id: '5',
       product: 'Vue for begainer',
      available: 'Not Available',
      type:'Free',
      price: '100',

      author: 'Jhon Heikela',
      duration: 48,
      rating: 3.5,
      description: 'In this course you will learn the fundamentals of javascripts',
      image: 'assets/vue.jpeg',
    },
    {
      id: '6',
       product: 'Vue for begainer',
      available: 'Available',
      type:'Free',
      price: '100',

      author: 'Jhon Heikela',
      duration: 48,
      rating: 3.5,
      description: 'In this course you will learn the fundamentals of javascripts',
      image: 'assets/vue.jpeg',
    },
    {
      id: '7',
       product: 'Vue for begainer',
      available: 'Available',
      type:'Free',
      price: '100',

      author: 'Jhon Heikela',
      duration: 48,
      rating: 3.5,
      description: 'In this course you will learn the fundamentals of javascripts',
      image: 'assets/vue.jpeg',
    },
    {
      id: '8',
       product: 'Vue for begainer',
      available: 'Not Available',
      type:'Free',
      price: '100',

      author: 'Jhon Heikela',
      duration: 48,
      rating: 3.5,
      description: 'In this course you will learn the fundamentals of javascripts',
      image: 'assets/vue.jpeg',
    },
    {
      id: '9',
       product: 'Vue for begainer',
      available: 'Available',
      type:'Free',
      price: '100',

      author: 'Jhon Heikela',
      duration: 48,
      rating: 3.5,
      description: 'In this course you will learn the fundamentals of javascripts',
      image: 'assets/vue.jpeg',
    },
  ];

  getTotalCourses(){
    return this.products.length;
  }
  getFreeCourses(){
    return this.products.filter(course => course.type === 'Free').length;
  }
  getPremiumCourses(){
    return this.products.filter(course => course.type === 'Premium').length;
  }

  courseCountRadioButton: string = 'All';
  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    console.log(this.courseCountRadioButton);
  }
}
