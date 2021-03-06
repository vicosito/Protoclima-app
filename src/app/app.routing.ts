/**
 * Created by Victor on 29/7/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importar componentes
import  { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import  { AdminComponent} from './admin/admin.component';
import { ListaUsuarioComponent } from  './lista-usuario/lista-usuario.component';
const appRoutes: Routes=[
  {path:'', component:LoginComponent}, // home
  {path:'home',component:HomeComponent},
  {path:'administrador',component:AdminComponent},
  {path:'lista',component:ListaUsuarioComponent},
  {path:'**',component:LoginComponent} // por error
];

export const appRoutingProviders:any[]=[];  // exportar de una variable que es un array de cualquier tipo para que angular pueda cargar el provider de la ruta
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes); // otra variable llamada ruting le decimos que array de rutas va cargar
