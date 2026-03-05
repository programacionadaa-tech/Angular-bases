import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit{
  
  @Input() mensaje: any;
  
  constructor(){ }

  ngOnInit(){
    
  }
}
