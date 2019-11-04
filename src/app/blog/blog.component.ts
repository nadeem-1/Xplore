import { Component, OnInit } from '@angular/core';
import{Post} from '../share/post';
import {Observable} from'rxjs';
import {PostService} from '../service/post.service';
import{FireAuthService} from'../service/fire-auth.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts:Observable<Post[]>
  constructor(private postservice:PostService,private auth:FireAuthService) { }

  ngOnInit() {
    this.posts = this.postservice.getpost();
  }

  delete(id:string){
    this.postservice.delete(id);
  
  }
}
