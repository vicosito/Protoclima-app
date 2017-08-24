/**
 * Created by Victor on 12/7/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

@Injectable()
export class UsuarioService {
  public url:string ;
  public headers = new Headers({'Content-Type': 'application/json'});
  //private url: string = "http://3cc46610.ngrok.io/users/authenticate";

  constructor(private  http: Http) {
    this.url="http://localhost:3000/users/authenticate";
  }
getPrueba(){
    return 'Hola mundo desde el servicio ';
}
getArticulos(){
  return this.http.get(this.url)
    .map(respuesta => respuesta.json());
}
postUsuario(usuario:string, pass:string ){
var json = JSON.stringify({"email": usuario, "password": pass});
return this.http.post(this.url,json,{headers: this.headers}).map(res => res);
}
}
