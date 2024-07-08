import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { producto } from '../../interfaces/apiData';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  listaProductos: producto[] = [];

  isResultLoaded = false;

  constructor(private _tareaProducto: ApiService) {
    this.obtenerProducto();
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
