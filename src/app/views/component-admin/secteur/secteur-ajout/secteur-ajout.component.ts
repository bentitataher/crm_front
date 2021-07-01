import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminSecteurService } from '../../../../admin-secteur.service'

@Component({
  selector: 'app-secteur-ajout',
  templateUrl: './secteur-ajout.component.html',
  styleUrls: ['./secteur-ajout.component.css']
})
export class SecteurAjoutComponent implements OnInit {

  constructor(
    private _adminSecteurService: AdminSecteurService
  ) { }

  ajoutSecteurForm = new FormGroup({
    descriptionSecteur: new FormControl(''),
    secteur: new FormControl(''),
  })

  ngOnInit(): void {
  }

  ajoutSecteur() {
    let data = this.ajoutSecteurForm.value;
    this._adminSecteurService.ajoutService(data)
      .subscribe((secteur) => {
        console.log(secteur);
      })
  }



}
