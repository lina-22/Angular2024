import { Component, OnInit } from '@angular/core';
import { eventNames } from 'node:process';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchValue: string = '';
  changeSearcheValue(eventData: any) {
    // console.log(eventData);
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
