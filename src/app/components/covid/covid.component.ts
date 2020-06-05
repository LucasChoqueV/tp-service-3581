import { Component, OnInit } from '@angular/core';
import { CovidService } from './../../service/covid.service';
import { Covid } from 'src/app/models/covid';
import { element } from 'protractor';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  country: Covid;
  listCountries:Array<Covid>;
  listCountriesBackup:Array<Covid>;
  totalCases:boolean=true;
  recovered:boolean=false;
  deaths:boolean=false;
  newCases:boolean=false;
  newDeaths:boolean=true;

  countrySelect:string;


  constructor(private _service:CovidService) {
    this.listCountries = new Array<Covid>();
    this.listCountriesBackup = new Array<Covid>();
    this.country = new Covid();
    this.loadCountries();    
  }
  loadCountries(){
    this._service.getCountries().subscribe(
      (result) => {
        this.listCountries = result;
        this.listCountriesBackup = result;
      }
    )
  }

  filterCountry(){
    this.listCountries = this.listCountriesBackup;
    if(this.countrySelect != "World"){
      this.country = this.listCountries.find(elemento => elemento.Country_text == this.countrySelect);
      this.listCountries = new Array<Covid>();
      this.listCountries.push(this.country);
    }
  }

  ngOnInit(): void {
  }

}
