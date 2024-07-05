import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../shared/interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private urlApi: string = environments.apiUrl + 'Menu/';

  constructor(private http: HttpClient) {}

  lista(id: number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Lista?idUsuario=${id}`);
  }
}
