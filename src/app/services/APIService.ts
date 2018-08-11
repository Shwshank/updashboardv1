import { Http, Response, Headers, RequestOptions, BaseRequestOptions, RequestMethod } from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  projectURL: string = '../assets/APIData/';
  // projectURL: string = 'http://192.168.15.187:8000';
  // projectURL: string = 'https://qcitech.org:8081';

  constructor(private http: Http, ) { }

  Login(data) {
    return this.http.post(this.projectURL + '/login', data).map(res => res.json());
  }

  GetMap() {
    return this.http.get(this.projectURL + 'map.json').map(res => res.json());
  }

  GetTree() {
    return this.http.get(this.projectURL + 'tree.json').map(res => res.json());
  }

  GetGraph1() {
    return this.http.get(this.projectURL + 'graph1.json').map(res => res.json());
  }

  GetGraph2() {
    return this.http.get(this.projectURL + 'graph2.json').map(res => res.json());
  }

  GetGraph3() {
    return this.http.get(this.projectURL + 'graph3.json').map(res => res.json());
  }

  GetGraph4() {
    return this.http.get(this.projectURL + 'graph4.json').map(res => res.json());
  }

  GetGraph5() {
    return this.http.get(this.projectURL + 'graph5.json').map(res => res.json());
  }

  GetGraph6() {
    return this.http.get(this.projectURL + 'graph6.json').map(res => res.json());
  }

  GetGraph7() {
    return this.http.get(this.projectURL + 'graph7.json').map(res => res.json());
  }

  GetGraph10() {
    return this.http.get(this.projectURL + 'graph10.json').map(res => res.json());
  }

  GetGraph11() {
    return this.http.get(this.projectURL + 'graph11.json').map(res => res.json());
  }

  GetGraph12() {
    return this.http.get(this.projectURL + 'graph12.json').map(res => res.json());
  }

  GetGraph13() {
    return this.http.get(this.projectURL + 'graph13.json').map(res => res.json());
  }

  GetGraph14() {
    return this.http.get(this.projectURL + 'graph14.json').map(res => res.json());
  }
}
