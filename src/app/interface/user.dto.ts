export interface CreateUserDto {
  firstname: string;
  lasname: string;
  username: string;
  email: string;
  password?: string;
  role?: string
}

export interface SignUpUserDto {
  firstname: string;
  lasname: string;
  username: string;
  email: string;
  password: string;
}

export interface LogInUserDto {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role?: string
}
