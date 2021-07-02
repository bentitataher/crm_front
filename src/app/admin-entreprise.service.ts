import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminEntrepriseService {

  constructor(
    private http: HttpClient
  ) { }

  // Get All Secteurs
  getAllService() {
    return this.http.get("http://localhost:3000/entreprise/admin")
  }

  // SUpprimer Secteurs
  deleteService(id) {
    return this.http.delete("http://localhost:3000/entreprise/admin/" + id)
  }

}
