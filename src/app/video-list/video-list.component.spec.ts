import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from "@angular/http";

import { VideoListComponent } from './video-list.component';
import { YouTubeService } from "app/youtube.service";
import { AppMaterialModule } from "app/app-material.module";
import { Video } from "app/video";

describe('When showing a list of videos ', () => {
  beforeEach(async(() => {

    var ytService = {
      searchVideosByQuery(query: string,
        func: (videos: Video[], nextPageTokenId: string) => void, nextPageTokenId = ""){
          var videos: Video[] = [];
          for (var index = 0; index < 5; index++) {
            videos.push( {
              videoId: '',
              title: '',
              description: '',
              channelTitle: '',
              srcCoverImg: '',
              srcChannelImg: '',
              viewNumber: 0
            });
          }

          func(videos, "test");
        },

      getNextPageByTokenId(nextPageTokenId: string, 
        func: (videos: Video[], nextPageToken: string) => void){
        func([{
          videoId: '',
          title: '',
          description: '',
          channelTitle: '',
          srcCoverImg: '',
          srcChannelImg: '',
          viewNumber: 0
        }],"");
      }
    };

    TestBed.configureTestingModule({ 
      imports:[
        RouterTestingModule, 
        HttpModule,
        AppMaterialModule
      ],
      declarations: [
        VideoListComponent
      ],
      providers: [{provide: YouTubeService, useValue: ytService } ]
    }).compileComponents();
  }));

  it('should create the VideoListComponent', async(() => {
    const fixture = TestBed.createComponent(VideoListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create the first list with five(5) videos', async(() => {
    const fixture = TestBed.createComponent(VideoListComponent);
    const app:VideoListComponent = fixture.debugElement.componentInstance;
    app.createVideos("test");
    expect(app.videos.length).toEqual(5);
  }));

  it('should get the next page by tokenId (videos total = 6)', async(() => {
    const fixture = TestBed.createComponent(VideoListComponent);
    const app:VideoListComponent = fixture.debugElement.componentInstance;
    app.createVideos("test");
    app.getMoreVideos();
    expect(app.videos.length).toEqual(6);
  }));
});

