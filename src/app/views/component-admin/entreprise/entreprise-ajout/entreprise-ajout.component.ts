import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminEntrepriseService } from '../../../../admin-entreprise.service';
import { AdminSecteurService } from '../../../../admin-secteur.service';

@Component({
  selector: 'app-entreprise-ajout',
  templateUrl: './entreprise-ajout.component.html',
  styleUrls: ['./entreprise-ajout.component.css']
})
export class EntrepriseAjoutComponent implements OnInit {

  public secteur: any;
  logoUpload: File;

  constructor(
    private _adminSecteurService: AdminSecteurService,
    private _adminEntrepriseService : AdminEntrepriseService
  ) { }

  ngOnInit(): void {
    this._adminSecteurService.getAllService()
      .subscribe((secteurGetted) => {
        this.secteur = secteurGetted;
      })
  }

  onFileSelect(event) {
    this.logoUpload = event.target.files[0];
    console.log("check point ==> : ", this.logoUpload);
  }

  adminRegistrationCompanyForm = new FormGroup({
    entreprise: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    secteur: new FormControl(''),
    // logo: new FormControl(''),
    tel: new FormControl(''),
    fax: new FormControl(''),
    siegeSocial: new FormControl(''),
    description: new FormControl('')
  })

  ajouter() {
    let data = this.adminRegistrationCompanyForm.value

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    });

    formData.append('image', this.logoUpload, this.logoUpload.name);

    this._adminEntrepriseService.ajoutService(formData)
      .subscribe((adminData)=>{
        console.log(adminData);
      })

  }

}
