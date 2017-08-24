import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
  public urlDeAutentifiacionDeUsuarios: string;
  public jsonHeaders = new Headers({'Content-Type': 'application/json'});

  constructor(private  http: Http) {
    this.urlDeAutentifiacionDeUsuarios = "http://localhost:3000/users/authenticate";
  }

  postUsuario(usuario: string, pass: string) {
    var usuarioJson = JSON.stringify({"email": usuario, "password": pass});
    return this.http.post(this.urlDeAutentifiacionDeUsuarios, usuarioJson, {headers: this.jsonHeaders}).map(res => res);
  }
}
