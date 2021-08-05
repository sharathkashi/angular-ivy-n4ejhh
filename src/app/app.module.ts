import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RetailerComponent } from './retailer/retailer.component';
import { DateComponent } from './date/date.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RetailerComponent,
    DateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
