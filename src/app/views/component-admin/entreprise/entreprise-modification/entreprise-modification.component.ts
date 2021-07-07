import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminEntrepriseService } from '../../../../admin-entreprise.service';
import { AdminSecteurService } from '../../../../admin-secteur.service';

@Component({
  selector: 'app-entreprise-modification',
  templateUrl: './entreprise-modification.component.html',
  styleUrls: ['./entreprise-modification.component.css']
})
export class EntrepriseModificationComponent implements OnInit {

  public secteur: any;

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

}
