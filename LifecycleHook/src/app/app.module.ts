import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule if using ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule here if using ngModel
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

