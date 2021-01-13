import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` html
  <app-css></app-css>
  <app-clases></app-clases> 

  <p [appResaltado]="'blue'">
      Hola como estas?
  </p> 
  <app-ng-switch></app-ng-switch>
  `
})
export class HomeComponent implements OnInit {

  constructor() { 
    console.log('Constructor');
    
  } 


  ngOnInit(){
    console.log('ngoninit');
    
  }
}   
