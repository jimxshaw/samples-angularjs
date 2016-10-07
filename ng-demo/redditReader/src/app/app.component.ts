import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Headers, Jsonp, Response } from '@angular/http';
import { ApiResponse, Submission } from './reddit';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  feedData: Observable<Submission[]>;

  constructor(private jsonp: Jsonp) {

  }

  ngOnInit() {
    this.displaySubreddit();
  }

  private displaySubreddit() {
    this.feedData = this.jsonp.get('http://reddit.com/r/aww.json?jsonp=JSONP_CALLBACK')
    .map(res => (res.json() as ApiResponse).data.children
      .filter(({data}) => /(png|jpg)$/.test(data.url)).map(child => child.data));
  }
}
