import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import {Post} from '../share/post';
import {Observable} from 'rxjs';
import {FireAuthService} from '../service/fire-auth.service';
import{AngularFireStorage } from'@angular/fire/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts:Observable<Post[]>
  title:string;
  body:string;
  bottomText:string="Create Post";
  uploadImage:string = null;
  uploadPercent:Observable<number>;
  downloadURL:Observable<string>;
  constructor(private storage:AngularFireStorage,private auth:FireAuthService,private postService:PostService) { }

  ngOnInit() {
    this.posts = this.postService.getpost();
  }

  createpost(){
    const data={
      author:this.auth.authState.displayName || this.auth.authState.email,
      authorId:this.auth.currentUserId,
      title : this.title,
      body : this.body,
      published : new Date(),
      image:this.auth.authState.photoURL,
      uploadImage:this.uploadImage
    }
    this.postService.create(data);
    this.body='';
    this.title='';
    this.uploadImage='';
    this.bottomText='Post Created';
    setTimeout(()=>(this.bottomText='Create Post'),1000);
  }

uploading(event){
  
  const file = event.target.files[0];
  const path = 'posts/$'+file.name;
  if(file.type.split('/')[0] !== 'image'){
    return alert('Only image type  will uploaded');
  }else{
    
    const task = this.storage.upload(path,file);
    const ref = this.storage.ref(path);
    this.uploadPercent= task.percentageChanges();
    console.log('ImageUploaded');
 
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = ref.getDownloadURL()
        this.downloadURL.subscribe(url => (this.uploadImage = url));
      })
    )
    .subscribe();
  }

}

}
