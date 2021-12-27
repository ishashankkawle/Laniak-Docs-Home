import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vppagelist',
  templateUrl: './vp-pagelist.component.html',
  styleUrls: ['./vp-pagelist.component.css']
})
export class VpPagelistComponent implements OnInit {

  constructor() { }

  PageList = ["ABC" , "DEF" , "GHI" , "JKL" , "ASFF" , "akudwh" , "akuwhhu" , "ijjae" , "oljawb"]

  ngOnInit(): void {
  }

}
