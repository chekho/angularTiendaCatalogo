import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [InicioComponent, ProductosComponent, ContactoComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, RouterLink],
  exports: [InicioComponent, ProductosComponent, ContactoComponent],
})
export class PaginaModule {}
