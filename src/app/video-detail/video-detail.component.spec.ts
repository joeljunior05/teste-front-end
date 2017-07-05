import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from "@angular/http";

import { VideoDetailComponent } from './video-detail.component';
import { YouTubeService } from "app/youtube.service";
import { AppMaterialModule } from "app/app-material.module";
import { Video } from "app/video";

describe('When navigate to existing video', () => {
  beforeEach(async(() => {
    var ytService = {
      getVideoInDetailByVideoId(videoId: string,
        func: (videos: Video) => void){
          func({
            videoId: 'test',
            title: 'test',
            description: 'test',
            channelTitle: 'test',
            srcCoverImg: 'test',
            srcChannelImg: 'test',
            viewNumber: 0
          });
        }
      }

    TestBed.configureTestingModule({ 
      imports:[
        RouterTestingModule,
        HttpModule,
        AppMaterialModule
      ],
      providers: [{provide: YouTubeService, useValue: ytService }],
      declarations: [
        VideoDetailComponent
      ],
    }).compileComponents();
  }));

  it('should create the VideoDetailComponent', async(() => {
    const fixture = TestBed.createComponent(VideoDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have videoId', async(() => {
    const fixture = TestBed.createComponent(VideoDetailComponent);
    const app: VideoDetailComponent = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.videoId).toEqual('test');
  }));

  it('should have Video', async(() => {
    const fixture = TestBed.createComponent(VideoDetailComponent);
    const app: VideoDetailComponent = fixture.debugElement.componentInstance;
    app.initWithVideo({
      videoId: 'test',
      title: 'test',
      description: 'test',
      channelTitle: 'test',
      srcCoverImg: 'test',
      srcChannelImg: 'test',
      viewNumber: 0
    });
    expect(app.selectedVideo).toBeDefined();
  }));

});
