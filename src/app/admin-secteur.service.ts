import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminSecteurService {

  constructor(
    private http: HttpClient
  ) { }

    // Ajouter un secteur
    ajoutService(data){
      return this.http.post("http://localhost:3000/admin-secteur", data)
    }

    // Get All Secteurs
    getAllService(){
      return this.http.get("http://localhost:3000/admin-secteur")
    }

    // Get One Secteur
    getOneService(id){
      return this.http.get("http://localhost:3000/admin-secteur/"+id)
    }

    // Modifier secteur
    editService(id, data){
      return this.http.put("http://localhost:3000/admin-secteur/"+ id, data)
    }

    // Supprimer secteur
    deleteService(id){
      return this.http.delete("http://localhost:3000/admin-secteur/"+ id)
    }

}
