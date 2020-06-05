import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { Horoscope } from './../models/horoscope';
@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {

  titles:Array<string>;
  horoscope:Array<string>;
  dates:Array<string>;
  singleHoroscope:Horoscope;
  listHoroscope:Array<Horoscope>;

  constructor(private _http:HttpClient) {
    this.listHoroscope = new Array<Horoscope>();
    this.singleHoroscope = new Horoscope();

    this.titles = new Array<string>();
    this.horoscope = new Array<string>();
    this.dates = new Array<string>();
    this.getHoroscopeTitle();
    this.getHoroscope();
    this.getDates();

  }

  getHoroscopeTitle(){
    this.getHoroscopeAPI().subscribe(
      (result) =>{
        for(var i=0;i<12;i++)
        this.titles.push(result['titles'][i]);
      }
    )
  }

  getHoroscope(){
    this.getHoroscopeAPI().subscribe(
      (result) => {
        for(var i=0;i<12;i++)
        this.horoscope.push(result['dailyhoroscope'][this.titles[i]]);
      }
    )
  }

  getDates(){
    this.getHoroscopeAPI().subscribe(
      (result) =>{
        for(var i=0;i<12;i++){
          this.dates.push(result['dates'][this.titles[i]]);
        }
      }
    )
  }

  loadHoroscope(){
    for(var i=0;i<12;i++){
      this.singleHoroscope = new Horoscope();
      this.singleHoroscope.title = this.titles[i];
      this.singleHoroscope.date = this.dates[i];
      this.singleHoroscope.horoscope = this.horoscope[i];
      this.listHoroscope.push(this.singleHoroscope);
    }
  }

  getHoroscopeAPI(): Observable <any>{

    return this._http.get("https://www.horoscopes-and-astrology.com/json");
  }
}