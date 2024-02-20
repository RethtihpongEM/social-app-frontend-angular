import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LogInUserDto, SignUpUserDto } from '../interface';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.apiKey;
  constructor(private httpClient: HttpClient) {}

  public signUp(signUpUserDto: SignUpUserDto): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}auth/signup`, signUpUserDto);
  }
  public login(logInUserDto: LogInUserDto): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}auth/login`, logInUserDto, {
      withCredentials: true,
    });
  }

  public getDecodedToken() {
    let token: string = localStorage.getItem('aT') as string;
    return jwtDecode(token);
  }

  public isAuthenticated():boolean {
    let token: string = localStorage.getItem('aT') as string;
    if (token === null || token === undefined) {
      return false;
    } else {
      return true;
    }
  }
}
