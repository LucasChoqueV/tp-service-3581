import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) { }

  getNews(cat: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidApi-Host': 'livescore6.p.rapidapi.com',
        'X-RapidAPI-Key': 'e235253885mshf8907181857cc3cp19a94ejsndd308e579308'
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category=" + cat, httpOptions);
  }
  
  translateText(traslate:string) {
    alert("aquiss");
    var data = "source=en&q=Hello%20Boys!&target=es";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;


    xhr.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
    xhr.setRequestHeader("x-rapidapi-host", "google-translate1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "e235253885mshf8907181857cc3cp19a94ejsndd308e579308");
    xhr.setRequestHeader("accept-encoding", "application/gzip");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    xhr.send(data);
    xhr.onreadystatechange = (e) =>{
      alert("aqui no pasa nada");
      data = JSON.parse(xhr.responseText);
      alert(data['data']);
    }
  }
}


