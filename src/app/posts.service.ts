import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './models/posts';

@Injectable()
export class PostsService {

  baseUrl = 'http://ec2-35-175-212-202.compute-1.amazonaws.com:9095/post/';
  categoryType: any;

  constructor(private http:HttpClient) { }
  
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}
  submitPost(posts: Posts): Observable <Posts> {
    return this.http.post<Posts>(this.baseUrl+"addPost", posts);
  }

  getPosts():Observable<Posts[]>{
    return this.http.get<Posts[]>(this.baseUrl);
  }
 


}
