import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogpage',
  templateUrl: './catalogpage.component.html',
  styleUrls: ['./catalogpage.component.css']
})
export class CatalogpageComponent {

  constructor(private router: Router) { }

  public openPage() {
    this.router.navigate(['/viewpage']);
  }
}
