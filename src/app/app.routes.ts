import { Routes } from '@angular/router';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ProductosComponent } from './pagina/productos/productos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'contacto', component: ContactoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
];
