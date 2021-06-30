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

  logoUpload: File;

  onFileSelect(event) {
    this.logoUpload = event.target.files[0];
    console.log("check point ==> : ", this.logoUpload);
  }

  completeRegistrationForm = new FormGroup({
    tel: new FormControl(''),
    fax: new FormControl(''),
    siegeSocial: new FormControl(''),
    secteur: new FormControl('')
  })

  ngOnInit(): void {
  }

  registrationComplete() {

    let id = this.route.snapshot.paramMap.get('id');
    let data = this.completeRegistrationForm.value;

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    });

    formData.append('image', this.logoUpload, this.logoUpload.name);

    this._authenticationService.complete(formData, id)
      .subscribe((test) => {
        console.log(test)
      })

  }



}
