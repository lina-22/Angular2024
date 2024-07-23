import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  constructor(){
     
  }

  ngOnInit(): void {
    
  }

  selectedCustomer:any;

  customers: Customer []=[
    {customerNo:1, name: "Mark", address: "", city:"London", country: "uk"},
    {customerNo:2, name: "Mark", address: "", city:"London", country: "uk"},
    {customerNo:3, name: "Mark", address: "", city:"London", country: "uk"},
    {customerNo:4, name: "Mark", address: "", city:"London", country: "uk"}
  ];


}
