import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { IUserResponse } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserManagerService {
  // Se inyecta en el contructor del HttpClient
  // http es de tipo HttpClient
  // http es un modulo de angular que hace los llamados
  constructor(private http: HttpClient) {}

  // Función para hacer llamado al servicio, que consulta el random user
  getRandomName(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>('https://randomuser.me/api');
    // Devuelve un observable de tipo HttpClient
    // hay que suscribirse al observable para obtener la data
    // nos suscribimos en la clase user.component.ts
  }
}
