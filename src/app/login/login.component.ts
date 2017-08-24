import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../services/usuario.service';
import {NULL_EXPR} from "@angular/compiler/src/output/output_ast";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsuarioService]
})
export class LoginComponent implements OnInit {
  public articulos;

  constructor(
    private _usuarioService:UsuarioService) { }

  ngOnInit() {

    // this._usuarioService.getArticulos().subscribe(
    //   result => {
    //     this.articulos= result;
    //     if(!this.articulos){
    //       console.log("Error en el servidor");
    //     }
    //   },
    //   error => {
    //     var errorMessage= <any>error;
    //     console.log(errorMessage);
    //   }
    //)

  }
  loginUser(e){
    e.preventDefault();
    var resultado;
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this._usuarioService.postUsuario(username, password).subscribe(
      data => resultado = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finished!", resultado)
    );
    }

}
