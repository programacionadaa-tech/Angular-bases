import { Component, OnInit } from '@angular/core';
import { Data } from '../../service/data';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit{
  mensajes: any;


  constructor(private dataService: Data ){}
    ngOnInit(){
      this.mensajes = this.dataService.getPosts();
    }
  escuchaClick(id: number): void {
    console.log('Click en el post', id);
  }

}

