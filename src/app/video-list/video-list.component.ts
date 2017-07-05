import { Component, OnInit, Input } from '@angular/core';

import { Video } from "app/video";
import { YouTubeService } from "app/youtube.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: []
})

export class VideoListComponent implements OnInit {

  videos: Video[];
  nextPage: string;
  isLoading: boolean;

  constructor(private ytService: YouTubeService) { }

  ngOnInit() {
    
  }

  getMoreVideos(){
    this.isLoading = true;
    this.ytService.getNextPageByTokenId(this.nextPage, (videos, nextPageToken) => {
      this.isLoading = false;
      this.nextPage = nextPageToken;
      this.videos = this.videos.concat(videos);
    });
  }

    
  createVideos(search_q: string) {
      this.isLoading = true;
      this.ytService.searchVideosByQuery(search_q, (videos: Video[], tokenId: string) => {
        this.isLoading = false;
        this.videos= videos;
        this.nextPage = tokenId;
      });
    }

}
