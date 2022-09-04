import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCommonModule, MySecondaryModule } from 'my-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyCommonModule,
    MySecondaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
