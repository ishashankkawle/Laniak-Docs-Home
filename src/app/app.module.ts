import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './homepage/banner/banner.component';
import { IntroComponent } from './homepage/intro/intro.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ControComponent } from './homepage/contro/contro.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { CatalogpageComponent } from './catalogpage/catalogpage.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageModule } from './homepage/homepage.module';
import { HttpClientModule } from '@angular/common/http';
import {HttpService} from './services/HttpService';
import { CatBannerComponent } from './catalogpage/cat-banner/cat-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    IntroComponent,
    HomepageComponent,
    ControComponent,
    FooterComponent,
    CatalogpageComponent,
    CatBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
