import { Component, OnInit } from '@angular/core';
import { AdminSecteurService } from '../../../../admin-secteur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secteur-gestion',
  templateUrl: './secteur-gestion.component.html',
  styleUrls: ['./secteur-gestion.component.css']
})
export class SecteurGestionComponent implements OnInit {

  constructor(
    private _adminSecteurService: AdminSecteurService,
    private router: Router
  ) { }

  public secteur: any;

  ngOnInit(): void {
    this._adminSecteurService.getAllService()
      .subscribe((secteurGetted) => {
        this.secteur = secteurGetted;
      })
  }

  modifierSecteur(i) {
    this.router.navigate(['/admin-secteur-modification', this.secteur[i]._id])
  }

  supprimerSecteur(i) {
    this._adminSecteurService.deleteService(this.secteur[i]._id)
      .subscribe((secteurDeleted) => {
        console.log(secteurDeleted);
        this.ngOnInit();
      })
  }

}
