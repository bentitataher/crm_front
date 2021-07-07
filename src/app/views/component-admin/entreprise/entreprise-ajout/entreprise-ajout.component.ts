import { Component, OnInit } from '@angular/core';
import { AdminSecteurService } from '../../../../admin-secteur.service';

@Component({
  selector: 'app-entreprise-ajout',
  templateUrl: './entreprise-ajout.component.html',
  styleUrls: ['./entreprise-ajout.component.css']
})
export class EntrepriseAjoutComponent implements OnInit {

  public secteur : any;

  constructor(
    private _adminSecteurService: AdminSecteurService,  
  ) { }

  ngOnInit(): void {
    this._adminSecteurService.getAllService()
      .subscribe((secteurGetted) =>{
        this.secteur = secteurGetted;
      })
  }

}
