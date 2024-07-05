import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../../shared/interfaces/venta';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../shared/interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  private urlApi: string = environments.apiUrl + 'Venta/';

  constructor(private http: HttpClient) {}

  registrarVenta(request: Venta): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}Registrar`, request);
  }

  hostorialVenta(
    buscarPor: string,
    numeroVenta: string,
    fechaInicio: string,
    fechaFin: string
  ): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(
      `${this.urlApi}Historial?buscarPor=${buscarPor}&numeroVenta=${numeroVenta}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
    );
  }

  reporteVenta(fechaInicio: string, fechaFin: string): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(
      `${this.urlApi}Historial?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
    );
  }
}
