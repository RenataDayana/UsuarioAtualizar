import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  


  constructor(private http: HttpClient, private router: Router) { } 

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getByIdUsuario(id: number): Observable<Usuario>{ 
    return this.http.get<Usuario>(`https://projetobeaver.herokuapp.com/usuarios/${id}`, this.token)
  }

  putUsuario(usuario:Usuario): Observable<Usuario>{
    return this.http.get<Usuario>('https://projetobeaver.herokuapp.com/usuarios/logar', this.token)
  }
 

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin> ('https://projetobeaver.herokuapp.com/usuarios/logar', usuarioLogin)
  }
       
    cadastrar(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario> ('https://projetobeaver.herokuapp.com/usuarios/cadastrar', usuario)
  }
  

  logado(){  
    let ok: boolean = false

    if(environment.token != ''){    
      ok = true
    }
    return ok
   }
}