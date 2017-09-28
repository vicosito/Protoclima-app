import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {usuario} from '../models/usuario.model'

@Injectable()
export class UsuarioService {
  public urlDeAutentifiacionDeUsuarios: string;
  public urlDeCreacionDeUsuario: string;
  public urlDeListaDeUsuario: string;
  public jsonHeaders = new Headers({'Content-Type': 'application/json'});

  constructor(private  http: Http) {
    this.urlDeAutentifiacionDeUsuarios = "http://localhost:3000/users/authenticate";
    this.urlDeCreacionDeUsuario = "http://localhost:3000/users";
    this.urlDeListaDeUsuario = "http://localhost:3000/users";
  }

  postUsuario(usuario: string, pass: string) {
    var usuarioJson = JSON.stringify({"email": usuario, "password": pass});
    return this.http.post(this.urlDeAutentifiacionDeUsuarios, usuarioJson, {headers: this.jsonHeaders}).map(res => res);
  }

  guardarUsuarioNuevo(usuario: usuario){
    var usuarioJson = JSON.stringify(usuario);
    return this.http.post(this.urlDeCreacionDeUsuario, usuarioJson, {headers: this.jsonHeaders}).map(res =>res);
  }

  listarUsuarios(){
    return this.http.get(this.urlDeListaDeUsuario, {headers: this.jsonHeaders}).map(res =>res);
  }
}
