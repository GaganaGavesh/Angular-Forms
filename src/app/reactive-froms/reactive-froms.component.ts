import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

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
  forbiddenUserNames = ['Kamal','Nimal'];

  constructor() { }

  ngOnInit(){
    //this is basic reactive form
    //form group ekata thama whole form rka ayath wenne
    this.signUpForm = new FormGroup({
      //nested form groups
      //this.forbiddennames.bind(this) me validators run wenne Angular eken api danne reference eke witharai neh 
      //e nisa "this" kiyana eka mekata adala ne e nisa error ekak enawa
      //bind(this) this eka bind karala yawanawa me class eke ekak kiyala angular ekata danaganna
       'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.forbiddennames.bind(this)]),//required kiyanne static method ekak () danne ne meke, angular eken thama meka run karaganne api karanne e method ekata reference ekak dala tynawa witharai
        'email': new FormControl(null,[Validators.required, Validators.email], this.forbiddenEmails)
        //asychronous nisa meka errors validator array ekata danne ne meka wenama danne
       }),
      //me tynne form eke controls me tika thama html eken access karanne
       'gender': new FormControl('male'),//default value for gender
       'hobbies': new FormArray([new FormControl('swmming'),new FormControl('gardning')])
    });
    //valueChanges kiyanneobservable ekak e nisa apata liste karann inna ahaki mewage changes wenawada kiyala
    this.signUpForm.valueChanges.subscribe(
      (value)=>{
        console.log(value);
      }
    );
      //invalid pending valid
    this.signUpForm.statusChanges.subscribe(
      (status)=>{
        console.log(status);
      }
    );
  }

  onSubmit(){
     console.log(this.signUpForm);
  }
  onAddHobby(){
    const contrl = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(contrl);//formArray type ekata explicitly cast karanawa
    //ehema kale nathnam signupForm eka wage hena details goodak ekka tyna ekak enne array eka witharak ma nwei
    console.log((<FormArray>this.signUpForm.get('hobbies')));
  }

  //me validator 1 dana control eka thama methenta ganne
  forbiddennames(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenUserNames.indexOf(control.value) !== -1)//control eken ena value eka forbidden set eke tyeda ba;lanawa
    {
      return {'nameIsForbidden': true};
    }else{
      return null;// 'nameIsForbidden': false};  kiyala danne ne null dana eka or else eka omit karana eka thama karanne
    }
  }
  //promise waladi return karanne ne resolve or reject thama karanne
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'gaveshgamage@gmail.com'){
          resolve({'emailIsForbidden': true});
        }else{
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
  
}
