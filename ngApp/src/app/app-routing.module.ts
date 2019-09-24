import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashScreenComponent} from './splash-screen/splash-screen.component'
import { ApiPageComponent} from './api-page/api-page.component'

const routes: Routes = [
  {path: 'splash', component:SplashScreenComponent},
  {path: 'apikey', component:ApiPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
