//Framework artifacts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

//App artifacts
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Other artifacts
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { YouTubeService } from './youtube.service';
import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
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
