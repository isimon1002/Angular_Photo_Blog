import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../photo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entry = this.photoService.entry;
  comments = this.photoService.comments;
  comment = {
    name: '',
    comment: ''
  }
  @ViewChild('f') signupForm: NgForm


  constructor(private photoService: PhotoService) { }

  ngOnInit() {

  }

  onSubmit(){
    this.comment.name = this.signupForm.value.name;
    this.comment.comment = this.signupForm.value.text;
    this.comments.push(this.comment)
    this.signupForm.reset();
  }


}
