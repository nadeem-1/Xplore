import { Component, OnInit } from '@angular/core';
import{NewsService}from'../service/news.service';
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  constructor(private service:NewsService) { }
  liveNews:any={
    articles:"",
  };
  
  ngOnInit() {
    this.service.sportnews()
    .subscribe(res=>{console.log(res);this.liveNews=res;});
  }

}
