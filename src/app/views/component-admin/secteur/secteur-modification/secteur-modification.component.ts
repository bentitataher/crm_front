import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminSecteurService } from '../../../../admin-secteur.service'

@Component({
  selector: 'app-secteur-modification',
  templateUrl: './secteur-modification.component.html',
  styleUrls: ['./secteur-modification.component.css']
})
export class SecteurModificationComponent implements OnInit {

  constructor(
    private _adminSecteurService: AdminSecteurService,
    private route: ActivatedRoute,
  ) { }

  modifierSecteurForm = new FormGroup({
    descriptionSecteur: new FormControl(''),
    secteur: new FormControl(''),
  })

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this._adminSecteurService.getOneService(id)
      .subscribe((secteurGetted) => {
        this.modifierSecteurForm.patchValue(secteurGetted);
      })
  }

  modifierSecteur() {
    let id = this.route.snapshot.paramMap.get('id');
    let data = this.modifierSecteurForm.value;

    this._adminSecteurService.editService(id, data)
      .subscribe((updatedSecteur) => {
        console.log(updatedSecteur);
      })
  }

}
