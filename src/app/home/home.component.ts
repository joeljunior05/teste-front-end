import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { Video } from "app/video";
import { YouTubeService } from "app/youtube.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  nextPgToken: string; //NextPageTokenId

  foundVideos: Video[] = [];
  search_q: string;

  constructor(private ytService: YouTubeService) { }

  ngOnInit() {
  }

  searchVideos(){
    this.ytService.searchVideosByQuery(this.search_q, (videos: Video[], tokenId: string) => {
        this.foundVideos = videos;
        this.nextPgToken = tokenId;
      });
    
  }
}
