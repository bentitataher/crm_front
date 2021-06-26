import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.css']
})
export class PasswordForgetComponent implements OnInit {

  constructor(
    private _authentivationService : AuthenticationService,
    private router: Router
  ) { }

  forgetPasswordForm = new FormGroup({
    email: new FormControl(''),
  })

  ngOnInit(): void {
  }

  forget(){
    let data = this.forgetPasswordForm.value
    this._authentivationService.forgetService(data)
      .subscribe((mail) => console.log(mail)
      )
      
  }

}
