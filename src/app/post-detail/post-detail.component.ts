import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from'@angular/router';
import{PostService} from'../service/post.service';
import{Post} from '../share/post';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post:Post;
  constructor(private route:ActivatedRoute,private postservice:PostService,private loc:Location) { }

  ngOnInit() {
    this.getpost();
   
  }
getpost(){
  const id = this.route.snapshot.paramMap.get('id');
  return this.postservice.getPostData(id).subscribe(data=>this.post=data);
}
back(){
  this.loc.back();
}
}
