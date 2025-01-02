import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerComponent } from './layout/banner/banner.component';
import { OfferComponent } from './layout/offer/offer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './layout/productlist/productlist.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { OilsCategoriesComponent } from './layout/oils-categories/oils-categories.component';
import { BenefitsComponent } from './layout/benefits/benefits.component';
import { FrequentlyAskQueComponent } from './layout/frequently-ask-que/frequently-ask-que.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    OfferComponent,
    ProductlistComponent,
    OilsCategoriesComponent,
    BenefitsComponent,
    FrequentlyAskQueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatRadioModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
