import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../shared/interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  private urlApi: string = environments.apiUrl + 'Rol/';

  constructor(private http: HttpClient) {}

  lista(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`);
  }
}
