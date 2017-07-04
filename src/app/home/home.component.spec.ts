import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';


import { VideoListComponent } from '../video-list/video-list.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports:[
        RouterTestingModule, 
        FormsModule
      ],
      declarations: [
        HomeComponent,
        VideoListComponent
      ],
      providers: []
    }).compileComponents();
  }));

});
