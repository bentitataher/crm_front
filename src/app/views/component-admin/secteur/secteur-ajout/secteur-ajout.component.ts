import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-secteur-ajout',
  templateUrl: './secteur-ajout.component.html',
  styleUrls: ['./secteur-ajout.component.css']
})
export class SecteurAjoutComponent implements OnInit {

  constructor() { }

  ajoutSecteurForm = new FormGroup({
    descriptionSecteur: new FormControl(''),
    secteur: new FormControl(''),
  })

  ngOnInit(): void {
  }

  ajoutSecteur(){
    console.log(this.ajoutSecteurForm.value);
    
  }



}
