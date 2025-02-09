import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [InicioComponent, ProductosComponent, ContactoComponent, NavbarComponent, FormularioComponent, AboutComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, RouterLink],
  exports: [InicioComponent, ProductosComponent, ContactoComponent],
})
export class PaginaModule {}
