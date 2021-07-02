import { Component, OnInit } from '@angular/core';
import { AdminSecteurService } from '../../../../admin-secteur.service'

@Component({
  selector: 'app-secteur-gestion',
  templateUrl: './secteur-gestion.component.html',
  styleUrls: ['./secteur-gestion.component.css']
})
export class SecteurGestionComponent implements OnInit {

  constructor(
    private _adminSecteurService: AdminSecteurService
  ) { }

  public secteur : any;

  ngOnInit(): void {
    this._adminSecteurService.getAllService()
    .subscribe( (secteurGetted) =>{
      this.secteur = secteurGetted;
    })
  }

  modofierSecteur(i){
    console.log(
      "Test from modification",
      "\n",this.secteur[i].secteur,
      "\n",this.secteur[i].descriptionSecteur,
    )
  }

  supprimerSecteur(i){
    console.log(
      "Test from supprimer",
      "\n",this.secteur[i].secteur,
      "\n",this.secteur[i].descriptionSecteur,
    )
  }

}
