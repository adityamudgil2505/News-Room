import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashScreenComponent} from './splash-screen/splash-screen.component'
import { ApiPageComponent} from './api-page/api-page.component'
import { MainWindowComponent} from './main-window/main-window.component'
import {MLanguagesComponent} from './m-languages/m-languages.component'
import {MHomeComponent} from './m-home/m-home.component'
import {MExploreComponent} from './m-explore/m-explore.component'
import {MNewsChannelComponent} from './m-news-channel/m-news-channel.component'

const routes: Routes = [
  {path: '', component:SplashScreenComponent},
  {path: 'apikey', component:ApiPageComponent},
  {path: 'main', component:MainWindowComponent,
          children: [{path: 'languages', component:MLanguagesComponent},
                     {path: 'home', component:MHomeComponent},
                     {path: 'explore', component:MExploreComponent},
                     {path: 'newsChannel', component:MNewsChannelComponent}
          ,]
  },
  {path: 'splash', redirectTo: '/', pathMatch:'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
