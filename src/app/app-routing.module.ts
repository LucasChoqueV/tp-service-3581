import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { CovidComponent } from './components/covid/covid.component';
import { HoroscopeComponent } from './components/horoscope/horoscope.component';
const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'covid', component: CovidComponent },
  { path: 'horoscope', component: HoroscopeComponent},
  { path: '**', pathMatch:'full',redirectTo:'news' },
  { path: '', pathMatch:'full',redirectTo:'news' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
