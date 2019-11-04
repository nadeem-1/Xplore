import { Component, OnInit } from '@angular/core';
import{NewsService} from'../service/news.service';
@Component({
  selector: 'app-livenews',
  templateUrl: './livenews.component.html',
  styleUrls: ['./livenews.component.scss']
})
export class LivenewsComponent implements OnInit {

  liveNews:any={
    articles:"",
  };

  constructor(private service:NewsService) { }

  ngOnInit() {
this.service.newsgo()
.subscribe((res)=>{console.log(res);this.liveNews=res;});

  }

}
