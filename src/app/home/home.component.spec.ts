import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';


import { VideoListComponent } from '../video-list/video-list.component';
import { HomeComponent } from './home.component';
import { AppMaterialModule } from "app/app-material.module";
import { YouTubeService } from "app/youtube.service";
import { Video } from "app/video";

describe('when starting navigation to home', () => {
  beforeEach(async(() => {
    var ytService = {
      searchVideosByQuery(query: string,
        func: (videos: Video[], nextPageTokenId: string) => void, nextPageTokenId = ""){
          func([], "");
      }
    };
    
    TestBed.configureTestingModule({ 
      imports:[
        RouterTestingModule, 
        FormsModule,
        AppMaterialModule
      ],
      declarations: [
        HomeComponent,
        VideoListComponent
      ],
      providers: [{provide: YouTubeService, useValue: ytService }]
    }).compileComponents();
  }));

  it('should create the HomeComponent', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should not animated the form yet', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app: HomeComponent = fixture.debugElement.componentInstance;
    expect(app.isAnimated).toBeFalsy();
  }));

  it('should animated the form after creating video list', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app: HomeComponent = fixture.debugElement.componentInstance;
    app.searchVideos();
    expect(app.isAnimated).toBeTruthy();
  }));

});
