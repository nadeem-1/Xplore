import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from '../share/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postcollection:AngularFirestoreCollection<Post>;
  postDoc:AngularFirestoreDocument<Post>;

  constructor(private afs:AngularFirestore) { 
    this.postcollection = this.afs.collection('post',ref=>ref.orderBy('published','desc'));
  }

  getpost(){
    return this.postcollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    }))
  }

 create(data:Post){
   
    this.postcollection.add(data);
  }

getPostData(id : string){
this.postDoc= this.afs.doc<Post>('post/'+id)
return this.postDoc.valueChanges()

}
  getpostid(id:string){
    
    return this.afs.doc<Post>('post/'+id);
  }

  delete(id:string){

    return this.getpostid(id).delete();
  }

  update(id:string,formData){
    return this.getpostid(id).update(formData);
  }
}
