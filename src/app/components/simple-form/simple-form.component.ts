import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  userForm = this.fb.group({
    fullName:['']
  }); 
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
