import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular forms';
  defaultQuestion: string = 'pet';
  answer = '';
  genders: string[]= ['male','female'];
  suggestedName = '';
  
  @ViewChild('f') signupForm: NgForm;//submit karanna kalin from ekata acces ona nam meka hoda kramayak

  suggestUserName() {
    const suggestedName = 'Superuser';
    //this.suggestedName = 'Superuser';//2way data binding
    
    //setValue kiyana eken pluwn apita form data tikama override karanna(set values to whole form)
    //ethakota api data dala tyna fields nuth override wela setValue eke valyes watenawa
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    //patchValue kiyana eka form ekata wrap karala enne form ekata setValue kiyana ekath ganna ahaki
    //Override parts of your form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(f: NgForm){
  //   console.log('Submitted..!');
  //   console.log(f);
  // }
  onSubmit(){
    console.log('Submitted..!');
    console.log(this.signupForm);
  }

}
