import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomecontentComponent } from './components/homecontent/homecontent.component';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component: HomecontentComponent },
      { path: 'intro', component: IntroComponent },
      { path: '', component: HomecontentComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
