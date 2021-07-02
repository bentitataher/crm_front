import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminEntrepriseService } from '../../../../admin-entreprise.service';

@Component({
  selector: 'app-entreprise-gestion',
  templateUrl: './entreprise-gestion.component.html',
  styleUrls: ['./entreprise-gestion.component.css']
})
export class EntrepriseGestionComponent implements OnInit {

  public entreprise: any;

  constructor(
    private _adminEntrepriseService: AdminEntrepriseService,
    private router : Router,
  ) { }


  ngOnInit(): void {
    this._adminEntrepriseService.getAllService()
      .subscribe((entrepriseGetted) => {
        this.entreprise = entrepriseGetted;
        console.log("Entreprise Getted ==> : ", this.entreprise);
      })
  }

  modifierEntreprise(i) {
    this.router.navigate(['/admin-entreprise-modification', this.entreprise[i]._id])
  }

  supprimerEntreprise(i) {
    let id = this.entreprise[i]._id
    this._adminEntrepriseService.deleteService(id)
      .subscribe((entrepriseDeleted) => {
        console.log(entrepriseDeleted);
        this.ngOnInit();
      })
  }


}
