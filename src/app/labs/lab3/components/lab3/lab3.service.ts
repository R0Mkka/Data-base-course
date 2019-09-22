import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '@models/user.models';
import { API_URL } from '@constants';

const headers: HttpHeaders = new HttpHeaders({
  'Content-type': 'application/json'
});

@Injectable()
export class Lab3Service {
  constructor(
    private readonly http: HttpClient
  ) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${API_URL}/users`, { headers });
  }

  public addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${API_URL}/users`, JSON.stringify(user), { headers });
  }

  public removeAllUsers(): Observable<any> {
    return this.http.delete(`${API_URL}/users`, { headers });
  }

  public editUser(user: IUser): Observable<IUser> {
    return this.http.patch<IUser>(`${API_URL}/users`, JSON.stringify(user), { headers });
  }

  public removeUser(userId: string): Observable<IUser> {
    return this.http.delete<IUser>(`${API_URL}/users/${userId}`, { headers });
  }
}
