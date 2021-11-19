import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contro',
  templateUrl: './contro.component.html',
  styleUrls: ['./contro.component.css']
})
export class ControComponent implements OnInit 
{
  Likes : number = 135134;
  Uploads : number = 21023;
  Recommendations : number = 59491254;
  
  constructor() { }

  ngOnInit() {
  }

  OpenDialog ( id : string )
  {
    //Metro.dialog.open(id);
  }
}
