import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashScreenComponent} from './splash-screen/splash-screen.component'
import { ApiPageComponent} from './api-page/api-page.component'
import { MainWindowComponent} from './main-window/main-window.component'

const routes: Routes = [
  {path: '', component:SplashScreenComponent},
  {path: 'apikey', component:ApiPageComponent},
  {path: 'main', component:MainWindowComponent},
  {path: 'splash', redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
