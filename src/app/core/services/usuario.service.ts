import { Injectable } from '@angular/core';

import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../shared/interfaces/login';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../shared/interfaces/response-api';
import { Usuario } from '../../shared/interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlApi: string = environments.apiUrl + 'Usuario/';

  constructor(private http: HttpClient) {}

  iniciarSesion(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}IniciarSesion`, request);
  }

  lista(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`);
  }

  guardarUsuario(request: Usuario): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`, request);
  }

  editarUsuario(request: Usuario): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.urlApi}Editar`, request);
  }

  eliminarUsuario(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`);
  }
}
