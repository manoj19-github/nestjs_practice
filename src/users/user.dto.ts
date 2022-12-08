/* eslint-disable prettier/prettier */
export interface IUser {
  username: string;
  password: string;
  email: string;
  role: string;
}

export interface IAddUserPayload {
  name: string;
  address: string;
  marks: number;
}
export interface VUser {
  username: string;
  email: string;
}
