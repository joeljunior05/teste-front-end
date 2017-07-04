import { Component, OnInit, Input } from '@angular/core';
import { Video } from "app/video";
import { YouTubeService } from "app/youtube.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[];
  @Input() nextPage: string;

  constructor(private ytService: YouTubeService) { }

  ngOnInit() {
  }

  getMoreVideos(){
    this.ytService.getNextPageByTokenId(this.nextPage, (videos, nextPageToken) => {
      this.nextPage = nextPageToken;
      this.videos = this.videos.concat(videos);
    });
  }

}
