import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUserDto } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.apiKey;
  constructor(private httpClient: HttpClient) {}
  public getUsers(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}users`);
  }
  public deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}users/${id}`);
  }
  public createUser(createUser: CreateUserDto){
    createUser.password = createUser.username
    return this.httpClient.post(`${this.baseUrl}users`, createUser)
  }
}
