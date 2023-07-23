import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServiceComponent } from './pages/service/service.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { GameStoreModule } from './game-store/game-store.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ServiceComponent,
    BasePageComponent,    
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





