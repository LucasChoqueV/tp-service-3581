import { Component, OnInit } from '@angular/core';
import { ExchangeService } from './../../service/exchange.service';
import { Exchange } from 'src/app/models/exchange';
import { element } from 'protractor';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  fromType: string;
  toType: string;
  fromValue: number;
  resultService: number;

  listRates: Array<Exchange>;

  constructor(private _service: ExchangeService) {
    this.listRates = new Array<Exchange>();
    this.resultService=0;
    this.listRates = [
      {
        "base":"USD",
        "rates" : [],
      },
      {
        "base":"EUR",
        "rates" : [],
      },
      {
        "base":"GBP",
        "rates" : [],
      },
      {
        "base":"JPY",
        "rates" : [],
      },
      {
        "base":"CNY",
        "rates" : [],
      },
    ]
    this.loadUSD("USD");
    this.loadEUR("EUR");
    this.loadGBP("GBP");
    this.loadJPY("JPY");
    this.loadCNY("CNY");
  }

  loadUSD(base:string){
    this._service.getExchange(base).subscribe(
      (result) => {
        this.listRates[0].rates.push(result['rates']['USD']);
        this.listRates[0].rates.push(result['rates']['EUR']);
        this.listRates[0].rates.push(result['rates']['GBP']);
        this.listRates[0].rates.push(result['rates']['JPY']);
        this.listRates[0].rates.push(result['rates']['CNY']);
      })
  }

  loadEUR(base:string){
    this._service.getExchange(base).subscribe(
      (result) => {
        this.listRates[1].rates.push(result['rates']['USD']);
        this.listRates[1].rates.push(1.000000);
        this.listRates[1].rates.push(result['rates']['GBP']);
        this.listRates[1].rates.push(result['rates']['JPY']);
        this.listRates[1].rates.push(result['rates']['CNY']);
      }
    )
  }

  loadGBP(base:string){
    this._service.getExchange(base).subscribe(
      (result) => {
        this.listRates[2].rates.push(result['rates']['USD']);
        this.listRates[2].rates.push(result['rates']['EUR']);
        this.listRates[2].rates.push(result['rates']['GBP']);
        this.listRates[2].rates.push(result['rates']['JPY']);
        this.listRates[2].rates.push(result['rates']['CNY']);
      }
    )
  }

  loadJPY(base:string){
    this._service.getExchange(base).subscribe(
      (result) => {
        this.listRates[3].rates.push(result['rates']['USD']);
        this.listRates[3].rates.push(result['rates']['EUR']);
        this.listRates[3].rates.push(result['rates']['GBP']);
        this.listRates[3].rates.push(result['rates']['JPY']);
        this.listRates[3].rates.push(result['rates']['CNY']);
      }
    )
  }

  loadCNY(base:string){
    this._service.getExchange(base).subscribe(
      (result) => {
        this.listRates[4].rates.push(result['rates']['USD']);
        this.listRates[4].rates.push(result['rates']['EUR']);
        this.listRates[4].rates.push(result['rates']['GBP']);
        this.listRates[4].rates.push(result['rates']['JPY']);
        this.listRates[4].rates.push(result['rates']['CNY']);
      }
    )
  }

  calculate() {
    this._service.getExchange(this.fromType).subscribe(
      (result) => {
        this.resultService = result['rates'][this.toType];
        this.resultService = this.resultService * this.fromValue;
      }
    )
  }

  ngOnInit(): void {
  }
}