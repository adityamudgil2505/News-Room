import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ApiPageComponent } from './api-page/api-page.component';
import { ApiKeyTestingService} from './api-key-testing.service';

import { HttpClient, HttpClientModule} from '@angular/common/http';
import { MainWindowComponent } from './main-window/main-window.component';
import { MLanguagesComponent } from './m-languages/m-languages.component';
import { MHomeComponent } from './m-home/m-home.component';
import { MExploreComponent } from './m-explore/m-explore.component';
import { MNewsChannelComponent } from './m-news-channel/m-news-channel.component';
import { NewsViewModeComponent } from './news-view-mode/news-view-mode.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    ApiPageComponent,
    MainWindowComponent,
    MLanguagesComponent,
    MHomeComponent,
    MExploreComponent,
    MNewsChannelComponent,
    NewsViewModeComponent,
    RecentlyViewedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiKeyTestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
