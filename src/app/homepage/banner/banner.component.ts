import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as THREE from "three";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor(private router: Router) { }

  public openCatalog() {
    this.router.navigate(['/catalog']);
  }

}



