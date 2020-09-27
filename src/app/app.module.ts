import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';

import { routing } from './app.routing'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
