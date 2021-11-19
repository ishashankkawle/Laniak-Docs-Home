import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/HttpService';
import { IFolderTree } from 'src/app/Model/Resp_foldertree';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat-banner',
  templateUrl: './cat-banner.component.html',
  styleUrls: ['./cat-banner.component.css']
})
export class CatBannerComponent implements OnInit {

  constructor(private router : Router , private http : HttpService) { }

  ngOnInit() 
  {
    this.http.getRequestWithHeader("https://gitlab.com/api/v4/projects/8300723/repository/tree").subscribe((x : Observable<IFolderTree>)=> {
      // @TODO
      // Process output for Laest Update array
      console.log(x);
    }); 
  }

  openHomePage()
  {
    this.router.navigate(["/homepage"]);
  }

}
