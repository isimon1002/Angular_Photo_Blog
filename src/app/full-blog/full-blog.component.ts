import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-full-blog',
  templateUrl: './full-blog.component.html',
  styleUrls: ['./full-blog.component.css']
})
export class FullBlogComponent implements OnInit {

  entries = this.photoService.entries


  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  signleEntry(index){
    this.photoService.getEntry(index)
  }

}
