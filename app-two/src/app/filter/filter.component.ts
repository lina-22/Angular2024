import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {

  constructor(){}

  ngOnInit(): void{}

  @Input('total') all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;


}
