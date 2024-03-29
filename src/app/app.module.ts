import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  // providers: [
  //   provideImageKitLoader("url_cdn")
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
