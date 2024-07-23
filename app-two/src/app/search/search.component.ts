import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { eventNames } from 'node:process';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }


  changeSearcheValue(eventData: any) {
    // console.log(eventData);
    // console.log((<HTMLInputElement>eventData.target).value);
    this.enteredSearchValue = (<HTMLInputElement>eventData.target).value;
  }
}
