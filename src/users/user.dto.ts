export interface IUser {
  id: number;
  name: string;
  address: string;
  marks: number;
}

export interface IAddUserPayload {
  name: string;
  address: string;
  marks: number;
}
