import { Component, OnInit } from '@angular/core';
import{NewsService}from '../service/news.service'
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  liveNews:any={
    articles:"",
  };
  constructor(private service:NewsService) { }

  ngOnInit() {
    this.service.technews()
    .subscribe(res=>{console.log(res);this.liveNews=res;});
  }

}
