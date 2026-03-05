import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface PostMensaje {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit {

  @Input() mensaje!: PostMensaje;
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  darClick(): void {
    this.clickPost.emit(this.mensaje.id);
  }
}
