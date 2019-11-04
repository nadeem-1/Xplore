import { Component, OnInit } from '@angular/core';
import{NewsService} from'../service/news.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  liveNews:any={
    articles:"",
  };
  constructor(private service:NewsService) { }

  ngOnInit() {
    this.service.sciencenews()
.subscribe(res=>{console.log(res);this.liveNews=res;});
  }

}
