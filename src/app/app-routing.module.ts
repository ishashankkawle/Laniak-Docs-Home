import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CatalogpageComponent } from './catalogpage/catalogpage.component';

const routes = [
  { path : 'homepage' , component : HomepageComponent },
  { path : 'catalog' , component : CatalogpageComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes , { enableTracing: false })
    
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
