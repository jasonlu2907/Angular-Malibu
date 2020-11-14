import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { AgmCoreModule } from '@agm/core';

// DECORATE MODULE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';

// ADDITIONAL COMPONENTS
import { routing } from './app.routing';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { MenuComponent } from './menu/menu.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    MenuComponent,
    ItemDetailComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatSliderModule,
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
