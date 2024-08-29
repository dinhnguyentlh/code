import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { HomeComponent } from './home.component';
import { HomecontentComponent } from './components/homecontent/homecontent.component';
import { IntroComponent } from './components/intro/intro.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SiderbarComponent,
    HomeComponent,
    HomecontentComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
