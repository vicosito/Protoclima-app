import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {


  constructor(private _usuarioService: UsuarioService,
              private router: Router) {
  }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    var resultado;
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this._usuarioService.postUsuario(username, password).subscribe(
      data => this.goToHome(data),
     error => alert(error)
    );
  }

  goToHome(data) {
   if (JSON.parse(data._body) ==='autorizado') {
      this.router.navigate(['home']);
    }
  }
}
