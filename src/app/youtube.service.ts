//Framework artifacts
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

//Other artifacts
import { Video } from './video';

@Injectable()
export class YouTubeService {

  private readonly URL_BASE: URL = new URL('https://www.googleapis.com/youtube/v3/');
  private readonly ACCESS_KEY = 'AIzaSyBTo8mOJjxoqYSXEkdIZQdz07ldQndgKaA';

  constructor(private http: Http) { }

  getVideoInDetailByVideoId(videoId: string,
                            func: (videos: Video) => void){
    if(videoId){
      let SERVICE = this.URL_BASE+'videos';

      var params: URLSearchParams = new URLSearchParams();
      params.set('part', 'snippet, statistics');
      params.set('id', videoId);
      params.set('key', this.ACCESS_KEY);

      console.log(videoId);

      this.http.get(SERVICE, {search: params}).toPromise().then((response: Response) => {
        var element = response.json().items[0];
        var video = this.mapElement2Video(element);
        
        if(element){
          video.videoId = videoId;
          video.viewNumber = element.statistics.viewCount;
        }

        func(video);
      }).catch(this.handleError);

    }
  }

  getNextPageByTokenId(nextPageTokenId: string, 
                            func: (videos: Video[], nextPageToken: string) => void){
    if(nextPageTokenId){
      this.searchVideosByQuery("", func, nextPageTokenId);
    }
  }

  searchVideosByQuery(query: string,
                      func: (videos: Video[], nextPageTokenId: string) => void, nextPageTokenId = ""){
   if(query || nextPageTokenId){

     let SERVICE = this.URL_BASE+'search';

     var params: URLSearchParams = new URLSearchParams();
     params.set('type', 'video');
     params.set('maxResults', '20');
     params.set('part', 'snippet');
     params.set('key', this.ACCESS_KEY);

     if(query){
      params.set('q', encodeURIComponent(query));
     } else if(nextPageTokenId){
      params.set('pageToken', nextPageTokenId);
     }

     this.http.get(SERVICE, {search: params}).toPromise()
                .then((response: Response) => {
                    var videos = this.extractData(response);
                    var nextTokenId = response.json().nextPageToken;
                    func(videos, nextTokenId);
                }).catch(this.handleError);
    }
  }

  private extractData(response: Response): Video[] {
    let body = response.json();

    console.log(body);

    var videos: Video[] = [];

    body.items.forEach((element, index, array) => {
      videos.push(this.mapElement2Video(element));
    });
    
    return videos;
  }

  private mapElement2Video(element: any): Video{

    var video = {
      videoId: '',
      title: '',
      description: '',
      channelTitle: '',
      srcCoverImg: '',
      srcChannelImg: '',
      viewNumber: 0
    };

    if(element){

      video.videoId       = element.id.videoId;
      video.channelTitle  = element.snippet.channelTitle ;
      video.description   = element.snippet.description;
      video.title         = element.snippet.title;
      video.srcCoverImg   = element.snippet.thumbnails.medium.url;
    }

    return video;
  }

  private handleError (error: Response | any): Promise<any> {
    let errMsg: string; 

    if (error instanceof Response) {
      const body = error.json() || '';
      console.log(body);
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
      
    }
    
    return Promise.reject(error.message || error);
  }

}
