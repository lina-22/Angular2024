import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService],
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  title = 'Observable ';

  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  // setTimeout(() => {
  //   observer.error(new Error('Something went wrong! Please try again later'));
  // }, 3000);
  // setTimeout(() => {
  //   observer.next('4');
  // }, 4000);
  // setTimeout(() => {
  //   observer.next('5');
  // }, 5000);
  // setTimeout(() => {
  //   observer.complete();
  // }, 6000);
  // observer.next('1');
  // observer.next('2');
  //   observer.next('3');
  //   observer.next('4');
  //   observer.next('5');
  // });

  counterObservable = interval(1000);
  counterSub: any;

  unsubscribe() {
    this.counterSub.unsubscribe();
  }

  subscribe() {
    this.counterSub = this.counterObservable.subscribe((val) => {
      console.log(val);
    });
  }
}
// ngOnInit() {
// this.myObservable.subscribe(
//   (val) => {
//     console.log(val);
//   },
//   (error) => {
//     alert(error.message);
//   },
//   () => {
//     alert('Observable has emitting all values');
//   }
// );

// this.counterSub = this.counterObservable.subscribe((val) => {
//   console.log(val);
// });
//   }
// }
