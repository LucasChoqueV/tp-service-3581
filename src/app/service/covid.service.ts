import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http: HttpClient) { }

  getCountries():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidApi-Host': 'covid-19-tracking.p.rapidapi.com',
        'X-RapidAPI-Key': 'e235253885mshf8907181857cc3cp19a94ejsndd308e579308'
      })
    };
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1",httpOptions);
  }
}