import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminEntrepriseService {

  constructor(
    private http: HttpClient
  ) { }

  // Get All Entreprise
  getAllService() {
    return this.http.get("http://localhost:3000/admin-entreprise/")
  }

  // Ajouter entreprise
  ajoutService(data){
    return this.http.post("http://localhost:3000/admin-entreprise/signup", data)
  }

  // Modifier entreprise
  editService(data, id){
    return this.http.put("http://localhost:3000/admin-entreprise/" + id, data)
  }

  // Supprimer Entreprise
  deleteService(id) {
    return this.http.delete("http://localhost:3000/admin-entreprise/" + id)
  }

}
