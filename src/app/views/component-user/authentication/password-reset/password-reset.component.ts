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
    let id = this.route.snapshot.paramMap.get('token');
    this._authentivationService.resetService(id)
      .subscribe((reset) => {
        console.log(reset);
      })
  }

}
