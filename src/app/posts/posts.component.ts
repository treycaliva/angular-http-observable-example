import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../interface/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post$: Observable<Post>

  constructor(private postService: PostService) { 
    this.post$ = postService.getPosts();
  }

  ngOnInit(): void {
  }

}
