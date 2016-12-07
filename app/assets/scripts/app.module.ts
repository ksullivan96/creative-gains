import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {AnimationSlide} from './services/AnimationSlide';

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule, routing ],
  declarations: [ AppComponent,
                  PortfolioComponent,
                  AboutComponent,
                  ContactComponent,
                  HomeComponent],
  bootstrap:    [ AppComponent ],
  providers: [ AnimationSlide ]
})
export class AppModule { }
