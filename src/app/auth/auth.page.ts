import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}
  onLogin() {
    this.isLoading = true;
    this.authService.login();
    //after login, direct to discover
    setTimeout( () => {
      this.isLoading = false;
      this.router.navigateByUrl('/places/tabs/discover');
    }, 1500);
  }
  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
    if (this.isLogin) {
      //send a request to login serves
    } else {
      //send a request to signup servers
    }
  }

}
