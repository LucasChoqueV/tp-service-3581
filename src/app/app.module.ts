import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { CovidComponent } from './components/covid/covid.component';
import { HoroscopeComponent } from './components/horoscope/horoscope.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FooterComponent,
    HeaderComponent,
    ExchangeComponent,
    CovidComponent,
    HoroscopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
