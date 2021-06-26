import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  // Premiere inscription
  firstRegistration(entreprise) {
    return this.http.post("http://localhost:3000/entreprise/signup", entreprise)
  }

  // Compléter inscriptio
  complete(data, id){
    return this.http.put("http://localhost:3000/entreprise/"+id, data)
  }

  // login
  loginService(data){
    return this.http.post("http://localhost:3000/entreprise/login", data)
  }

  // Configuration auth guard
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
