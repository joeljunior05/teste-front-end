//Framework artifacts
import { Injectable } from '@angular/core';

//Other artifacts
import { Video } from './video';

@Injectable()
export class YouTubeService {

  constructor() { }

  //TODO: Remove it
  getVideoExample(id: string): Video{
    return {
      videoId: "vk0F8dHo3wU",
      title: "\"Pacific Dreams\" A California Surfing Film",
      description: "\"Pacific Dreams\" is a surfing movie featuring my 2015 footage shot around the beautiful state of California. Filmed & Edited by Jeff Chavolla ( http://www.",
      channelTitle: "Jeff Chavolla",
      srcCoverImg: "https://i.ytimg.com/vi/vk0F8dHo3wU/hqdefault.jpg",
      srcChannelImg: "https://yt3.ggpht.com/-jmaP8NuzjqQ/AAAAAAAAAAI/AAAAAAAAAAA/O0YmloF15KU/s240-c-k-no-mo-rj-c0xffffff/photo.jpg",
      viewNumber: 12345
    };
  }

  getNextPageByTokenId(idnextPageToken: string, 
                     func: (videos: Video[], nextPageToken: string) => void){
    if(idnextPageToken){
      var videos: Video[] = [];
      for (var _i = 0; _i < 5; _i++) {
        videos.push(this.getVideoExample("Teste"));
      }
      func(videos, "");
    }
  }

  getVideoInDetailByVideoId(videoId: string,
                            func: (videos: Video) => void){
   if(videoId){
      func(this.getVideoExample( "123342"));
    }
  }

  searchVideosByQuery(query: string,
                      func: (videos: Video[], nextPageTokenId: string) => void){
   if(query){
      var videos: Video[] = [];
      for (var _i = 0; _i < 5; _i++) {
        videos.push(this.getVideoExample("Teste"));
      }
      console.log("passou");
      func(videos, "123342");
    }
  }

}
