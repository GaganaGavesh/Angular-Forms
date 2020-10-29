import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-froms',
  templateUrl: './reactive-froms.component.html',
  styleUrls: ['./reactive-froms.component.css']
})
export class ReactiveFromsComponent implements OnInit {

  //REACTIVE KIYANNE API FORM EKA CONFIGURE KARANNE .ts EKEN 
  //TEMPLATE EKEN KARANNE NE FROM EKA HADALA TYNAWA WITHARAI

  genders = ['male', 'female'];
  signUpForm: FormGroup;//group of controllers hold karagena innawa

  constructor() { }

  ngOnInit(){
    //this is basic reactive form
    this.signUpForm = new FormGroup({
       'username': new FormControl(null,Validators.required),//required kiyanne static method ekak () danne ne meke, angular eken thama meka run karaganne api karanne e method ekata reference ekak dala tynawa witharai
       'email': new FormControl(null,[Validators.required, Validators.email]),
       'gender': new FormControl('male')//default value for gender
    });
  }

  onSubmit(){
     console.log(this.signUpForm);
  }

}
