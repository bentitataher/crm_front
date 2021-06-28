import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../../../authentication.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(
    private _authentivationService: AuthenticationService,
    private route: ActivatedRoute,
  ) { }

  resetPasswordForm = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  ngOnInit(): void {
  }

  reset() {
    this.resetPasswordForm.value.token = this.route.snapshot.paramMap.get('token');
    let data = this.resetPasswordForm.value;
    this._authentivationService.resetService(data)
      .subscribe((reset) => {
        console.log(reset);
      })
  }

}
