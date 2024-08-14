import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  enteredText: string = '';

  OnButtonClick() {
    this.dataService.raiseDataEmitterEvent(this.enteredText);
    console.log(this.enteredText);
  }
}
