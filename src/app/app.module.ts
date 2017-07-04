//Framework artifacts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//App artifacts
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Other artifacts
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { YouTubeService } from './youtube.service';
import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    VideoDetailComponent,
    HomeComponent,
    VideoListComponent
  ],
  providers: [YouTubeService],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})

export class AppModule { }
