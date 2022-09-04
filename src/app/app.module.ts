import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCommonModule } from 'my-lib';
import { MySecondaryModule } from 'my-lib/secondary';

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
