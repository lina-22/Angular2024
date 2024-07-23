import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy{
 @Input() value: string = "lina";

 constructor(){
  console.log("Constructor called");
  // console.log(this.value);
 }


 ngOnInit(){
     console.log('ngOninit called');
      //  console.log(this.value);
 }

  ngOnChanges(change:SimpleChanges){
  console.log('ngOnchanges called valus');
  console.log(change);

 }

  ngDoCheck(){
  console.log("ng do chek is called")
 }

 ngAfterContentInit(){
   console.log("ngAfterContentInit ... is called")
 }
 ngAfterContentChecked(){
   console.log("ngAfterContent Checked ... is called")
 }

 ngAfterViewInit(){
    console.log("ngAfter View init... is called")
 }

 ngAfterViewChecked(){
    console.log("ngAfter View checked... is called")
 }

 ngOnDestroy(){
   console.log("ngOnDestroy... is called")
 }
}
