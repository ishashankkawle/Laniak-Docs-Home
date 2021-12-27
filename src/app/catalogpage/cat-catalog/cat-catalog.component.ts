import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-catalog',
  templateUrl: './cat-catalog.component.html',
  styleUrls: ['./cat-catalog.component.css']
})
export class CatCatalogComponent{

  constructor(private router: Router) { }

  Topics = ["Android" , "ASP.net" , "C#" , "C" , "Java" , "Javascript" , "HTML" , "CSS" , "Firebase" , "Mulesoft"]
  public openPage() {
    this.router.navigate(['/viewpage']);
  }

}
