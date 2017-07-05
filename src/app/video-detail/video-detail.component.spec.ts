import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from "@angular/http";

import { VideoDetailComponent } from './video-detail.component';
import { YouTubeService } from "app/youtube.service";

describe('VideoDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports:[
        RouterTestingModule,
        HttpModule
      ],
      providers: [YouTubeService],
      declarations: [
        VideoDetailComponent
      ],
    }).compileComponents();
  }));

});
