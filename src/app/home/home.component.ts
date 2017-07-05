import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { Video } from "app/video";
import { YouTubeService } from "app/youtube.service";
import { VideoListComponent } from "app/video-list/video-list.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})

export class HomeComponent implements OnInit {

  @ViewChild(VideoListComponent) list: VideoListComponent;

  search_q: string;
  isAnimated: boolean = false;

  constructor() { }

  ngOnInit() {
  
  }

  searchVideos(){
    this.isAnimated = true;
    this.list.createVideos(this.search_q);
  }
}
