import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{News} from '../share/news';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(private http:HttpClient) { }

newsgo(){
  return this.http.get<News[]>(this.url);
}

technews(){
  return this.http.get<any[]>(this.url1);
}

sportnews(){
  return this.http.get<any[]>(this.url2);
}

sciencenews(){
  return this.http.get<any[]>(this.url3);
}
}
