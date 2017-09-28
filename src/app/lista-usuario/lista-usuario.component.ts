import { Component, OnInit } from '@angular/core';
import{ usuario } from '../models/usuario.model';
import {UsuarioService} from '../services/usuario.service';

@Component({
  selector: 'listaUsuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css'],
  providers: [UsuarioService]
})
export class ListaUsuarioComponent implements OnInit {
  public usuarios;
  constructor(private _usuarioService: UsuarioService) {
    this.usuarios = [];
  }

  ngOnInit() {
    this._usuarioService.listarUsuarios().subscribe(
      data =>this.asignarUsuarios(data)),
      error => alert(error)
  }
  asignarUsuarios(data){
    this.usuarios = JSON.parse(data._body);
  }
}
