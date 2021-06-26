import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../../../authentication.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-register-complete',
  templateUrl: './register-complete.component.html',
  styleUrls: ['./register-complete.component.css']
})
export class RegisterCompleteComponent implements OnInit {

  constructor(
    private _authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  completeRegistrationForm = new FormGroup({
    logo: new FormControl(''),
    tel: new FormControl(''),
    fax: new FormControl(''),
    siegeSocial: new FormControl(''),
    secteur: new FormControl('')
  })

  ngOnInit(): void {
  }

  registrationComplete() {
    let id = this.route.snapshot.paramMap.get('id');
    let data = this.completeRegistrationForm.value
    this._authenticationService.complete(data, id)
      .subscribe(entreprise => console.log(entreprise)
      )
  }

}
