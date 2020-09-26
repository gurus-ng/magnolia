import { gallery } from './../components/images';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  gallery = gallery;
  getUrl = "";
  constructor(
    private http: HttpClient
  ) { }
  getGallery() {
    //let getUrl = this.baseUrl + '';
    // return this.http.get(getUrl)
    // .toPromise();
    return gallery;
  }
  getVideo() {
    //let getUrl = this.baseUrl + '';
    // return this.http.get(getUrl)
    // .toPromise();
    let videoUrl = "https://vjs.zencdn.net/v/oceans.mp4"
    return videoUrl;
  }
}
