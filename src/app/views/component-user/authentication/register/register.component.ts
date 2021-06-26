import { Component } from '@angular/core';
import { FormControl, FormGroup }from'@angular/forms';
import { AuthenticationService } from '../../../../authentication.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(
    private _authenticationService : AuthenticationService,
    private route : ActivatedRoute,
    private router : Router
  ) { }
  
  registrationForm = new FormGroup({
    entreprise : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    description : new FormControl('')
  })

  registration(){
    this._authenticationService.firstRegistration(this.registrationForm.value)
    .subscribe(entreprise =>{
      console.log(entreprise)
      this.router.navigate(['/register-complete', entreprise['_id']]);
    })
  }

}
