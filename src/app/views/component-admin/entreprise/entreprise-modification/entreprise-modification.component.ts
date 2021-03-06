import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminEntrepriseService } from '../../../../admin-entreprise.service';
import { AdminSecteurService } from '../../../../admin-secteur.service';

@Component({
  selector: 'app-entreprise-modification',
  templateUrl: './entreprise-modification.component.html',
  styleUrls: ['./entreprise-modification.component.css']
})
export class EntrepriseModificationComponent implements OnInit {

  public secteur: any;
  public entreprise: any;
  public id: any;
  public logoUpload: File;

  constructor(
    private _adminSecteurService: AdminSecteurService,
    private _adminEntrepriseService: AdminEntrepriseService,
    private route: ActivatedRoute
  ) { }

  onFileSelect(event) {
    this.logoUpload = event.target.files[0];
    console.log("LogoUploaded ==> : ", this.logoUpload)
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    this._adminEntrepriseService.getOneService(this.id)
      .subscribe((entrepriseGetted) => {
        this.adminEditCompanyForm.patchValue(entrepriseGetted)
      })

    this._adminSecteurService.getAllService()
      .subscribe((secteurGuetted) => {
        this.secteur = secteurGuetted
      })
  }

  adminEditCompanyForm = new FormGroup({
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

  modifier() {
    let data = this.adminEditCompanyForm.value;

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    });

    formData.append('image', this.logoUpload, this.logoUpload.name);

    this._adminEntrepriseService.editService(formData, this.id)
      .subscribe((editedEntreprise) => {
        console.log(editedEntreprise);

      })

  }

}
