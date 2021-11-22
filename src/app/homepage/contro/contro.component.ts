import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contro',
  templateUrl: './contro.component.html',
  styleUrls: ['./contro.component.css']
})
export class ControComponent implements OnInit 
{
  Likes : number = 100;
  Uploads : number = 23;
  Recommendations : number = 254;
  
  constructor() { }

  ngOnInit() {
  }

  OpenDialog ( id : string )
  {
    //Metro.dialog.open(id);
  }
}
