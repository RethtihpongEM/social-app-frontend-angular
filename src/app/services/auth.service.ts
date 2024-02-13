import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignUpUserDto } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl:string = environment.apiKey;
  constructor(private httpClient: HttpClient) {}

  public signUp(signUpUserDto: SignUpUserDto) {
    return this.httpClient.post(`${this.baseUrl}+'auth/signup'`, signUpUserDto);
  }
}
