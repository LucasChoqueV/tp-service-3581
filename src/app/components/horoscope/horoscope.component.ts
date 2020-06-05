import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from '../../service/horoscope.service';
import { Horoscope } from './../../models/horoscope';
import { element } from 'protractor';
@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css']
})
export class HoroscopeComponent implements OnInit {

  singleHoroscope:Horoscope;
  listHoroscope:Array<Horoscope>;
  show:boolean=false;
  showHoroscope:boolean=false;

  constructor(private _service:HoroscopeService) {
    this.listHoroscope = new Array<Horoscope>();
    this.singleHoroscope = new Horoscope();
   }

  loadHoroscope(){
    this._service.loadHoroscope();
    this.loadTable();
    this.show = true;
  }

  loadTable(){
    this.listHoroscope = this._service.listHoroscope;
  }

  showSingleHoroscope(index:number){
    this.singleHoroscope.title =this.listHoroscope[index].title;
    this.singleHoroscope.date = this.listHoroscope[index].date;
    this.singleHoroscope.horoscope = this.listHoroscope[index].horoscope;
    this.showHoroscope=true;
  }
  ngOnInit(): void {
  }
}