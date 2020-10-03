import { Component, OnInit,Input } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';
import {SendDataService} from '../../services/send-data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() display: any;
  chosenMode: any;
  showComments: boolean;
  feesForm = this.fb.group({
    fullName:['', Validators.required],
    usn:['', Validators.required],
    email:['', Validators.required],
    paymentType:['', Validators.required],
    branch:['', Validators.required],
    modeAdmission:['', Validators.required],
    feesAmount:['', Validators.required],
    comments:['']
  });

  payTypes=["Cash","DD"];
  branches=['CSE','ISE','Mech','Telecom','BioTech','IEM'];
  modes=['CET','COMED-K','Management'];
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private sendData: SendDataService) { 
    this.chosenMode="";
    this.showComments=false;
  }

  ngOnInit() {
    console.log(this.display);
  }

  changeMode(event)
  {
    console.log(event);
    this.chosenMode=event.value;
  }

  onSubmit(){
    console.log(this.feesForm.value);
    if(this.feesForm.invalid)
    {
      this.snackBar.open("Please enter all required fields",null, {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
    }
    else
    {
      this.sendData.sendData(this.feesForm.value).then(response=>{
        this.snackBar.open("Your fees details have been successfully submitted",null, {
          duration: 2000,
          panelClass: ['green-snackbar']
        });
      })
    }
  }

  addComments(){
    this.showComments=true;
  }

  hideComments(){
    this.showComments=false;
  }

  get fullName(){return this.feesForm.get('fullName');}
  get usn(){return this.feesForm.get('usn');}
  get email(){return this.feesForm.get('email');}
  get paymentType(){return this.feesForm.get('paymentType');}
  get branch(){return this.feesForm.get('branch');}
  get modeAdmission(){return this.feesForm.get('modeAdmission');}
  get feesAmount(){return this.feesForm.get('feesAmount');}
}
