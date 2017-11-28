import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';

import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
