import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing-module';
import { Posts } from './posts';
import { Post } from './post/post';

@NgModule({
  declarations: [
    Posts,
    Post
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }