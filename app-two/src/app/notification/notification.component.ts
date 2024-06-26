import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass] ="{fadeOut:displayNotification }">
    <p>This website uses cookies to provide better user experience</p>
    <div class="close">
      <button class="btn" (click)="closeNotification()">X</button>
    </div>
  </div>`,
  styles: [
    '.notification-div{margin: 10px 0px; padding: 10px 20px; background-color:#FAD7A0; text-align:center;}',
    'p{font-size:14px}',
    '.close{float:right; margin-top:-35px;}', ".fadeOut {visibility: hidden; opacity:0; transition: visibility 0s 2s, opacity 2s liner;}"
  ],
})
export class NotificationComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    console.log('====================================');
    console.log('here...');
    console.log('====================================');
  }

  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
  
}
