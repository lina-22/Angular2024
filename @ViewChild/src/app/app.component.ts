import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {DemoComponent} from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(){

  }
  ngOnInit(): void {
    
  }

  title = 'ViewChild';

  @ViewChild('dobInput') dateOfBirth ?: ElementRef;

  @ViewChild('ageInput') age?:ElementRef;
  @ViewChild(DemoComponent, {static:true}) demoComp?: DemoComponent; 

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear-birthYear;
     if (this.age) {
      this.age.nativeElement.value = age;
    }
    // console.log(this.dateOfBirth);
    // console.log(this.age);
  }
}
