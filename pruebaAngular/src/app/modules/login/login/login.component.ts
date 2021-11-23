import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });



  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {

  }

  login(){
    const user = this.loginForm.controls['userName'].value;
    const password = this.loginForm.controls['password'].value;

    this.loginService.login(user,password);
  }

}
