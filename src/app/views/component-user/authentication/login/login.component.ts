import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private toasterService: ToasterService,
    private _authenticationService: AuthenticationService,
    private router: Router
  ) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  ngOnInit(): void {
    this.showSuccess();
  }

  showSuccess() {
    this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
  }

  login() {
    let data = this.loginForm.value
    this._authenticationService.loginService(data)
      .subscribe((data) => {
        localStorage.setItem('token', data['token']);
        this.router.navigate(['dashboard']);
      });
  }

}
