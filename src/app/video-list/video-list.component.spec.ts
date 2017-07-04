import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from "@angular/http";

import { VideoListComponent } from './video-list.component';
import { YouTubeService } from "app/youtube.service";


describe('VideoListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports:[
        RouterTestingModule, 
        HttpModule
      ],
      declarations: [
        VideoListComponent
      ],
      providers: [YouTubeService]
    }).compileComponents();
  }));

});
