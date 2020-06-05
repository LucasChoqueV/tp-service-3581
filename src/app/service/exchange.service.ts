import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exchange } from 'src/app/models/exchange';
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private _http: HttpClient) {
   }

  getExchange(base:string): Observable<any> {
    return this._http.get("https://api.exchangeratesapi.io/latest?base="+base);
    /*var result;
    var data = "from-type="+fromType+"&to-type="+toType+"&from-value="+fromValue;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", "https://community-neutrino-currency-conversion.p.rapidapi.com/convert");
    xhr.setRequestHeader("x-rapidapi-host", "community-neutrino-currency-conversion.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "e235253885mshf8907181857cc3cp19a94ejsndd308e579308");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    xhr.send(data);
    xhr.onreadystatechange = (e) => {
      result = JSON.parse(xhr.responseText);*/
  }
}