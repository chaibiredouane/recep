import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  errorMessage: string;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router) { }

  initForm() {
    this.authForm = this.formBuilder.group({
      username: '',
      password: ''
    });
   }

   ngOnInit() {
    this.initForm();
  }
 
  onSignIn(){}

  onSubmitForm() {
    const formValue = this.authForm.value;
    console.log('user : ' + formValue['username'] + ' pw : '+formValue['password'])
    this.authService.signIn(formValue['username'],formValue['password']);
    if(this.authService.isUserLoggedIn) this.router.navigate(['/expected']);
    this.errorMessage='The username or password is incorrect';
    // else {this.router.navigate(['/auth']);}
  }

}
