import { Component, OnInit } from '@angular/core';
import{ usuario } from '../models/usuario.model';
import {UsuarioService} from '../services/usuario.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UsuarioService]
})
export class AdminComponent implements OnInit {
  public usuario: usuario;
  public saveOk: boolean;

  constructor(
    private _usuarioService: UsuarioService )
  {
    this.usuario= new usuario('','','','','');
  }
onSubmit(){
  this._usuarioService.guardarUsuarioNuevo (this.usuario).subscribe(
    data =>this.Aviso(data)),
    error => alert(error)
}
 get currentUser(){
    return JSON.stringify(this.usuario);
 }
  Aviso(data) {
    if (JSON.parse(data._body) ==='saveOk') {
      this.saveOk=true;
    }else { this.saveOk=false;}
  }
  ngOnInit() {
  }

}

