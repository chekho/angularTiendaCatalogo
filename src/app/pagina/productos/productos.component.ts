import { Component } from '@angular/core';
import { producto } from '../../interfaces/apiData';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {
  listaProductos: producto[] = [];
  filtroNombre: string = '';
  filtroLowpolly: boolean | '' = ''; // Nueva propiedad para el filtro de lowpolly

  isResultLoaded = false;

  constructor(private _tareaProducto: ApiService) {
    this.obtenerProducto();
  }

  get productosFiltrados(): producto[] {
    return this.listaProductos
      .filter((producto) =>
        producto.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
      )
      .filter((producto) =>
        this.filtroLowpolly === ''
          ? true
          : producto.lowpolly === this.filtroLowpolly
      );
  }

  obtenerProducto() {
    this._tareaProducto.getProducto().subscribe({
      next: (data) => {
        this.listaProductos = data;
        this.isResultLoaded = true;
      },
      error: (e) => console.log(e),
    });
  }
}