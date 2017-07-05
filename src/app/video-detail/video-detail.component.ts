import { Component, OnInit, ElementRef, ApplicationRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Video } from '../video';
import { YouTubeService } from '../youtube.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})

export class VideoDetailComponent implements OnInit {

  selectedVideo: Video;
  videoId: string;
  url: SafeResourceUrl;

  constructor( private ytService: YouTubeService,
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer,
    private appRef: ApplicationRef) {}

  ngOnInit() {
    this.videoId = this.route.snapshot.paramMap.get('id');

    this.ytService.getVideoInDetailByVideoId(this.videoId,
                            (video: Video) => this.initWithVideo(video));
  }

  initWithVideo(video: Video){
    if(video){
      this.videoId = video.videoId;
      this.selectedVideo = video;
      //iFrame needs SafeResourceURL to work
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/"+this.selectedVideo.videoId); 
    }  
  }

  goBack(): void {
    this.location.back();
  }

}
