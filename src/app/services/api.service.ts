import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { producto } from '../interfaces/apiData';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _endpoint: string = environment.endPoint;
  private apiUrl: string = this._endpoint + 'api/';

  constructor(private _http: HttpClient) {}

  //Metodo para invocar al endpoint de ListaTareas.
  getProducto(): Observable<producto[]> {
    return this._http.get<producto[]>(`${this.apiUrl}producto`);
  }
}
