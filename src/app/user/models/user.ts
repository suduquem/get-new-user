export interface IUserResponse {
  results: Array<IUser>;
}

export interface IUser {
  email: string;
  name: IUserName;
  phone: string;
  picture: IUserPicture;
}

export interface IUserName {
  first: string;
  last: string;
}

export interface IUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Itest extends IUser {
    //Extender una interfaz de otra, hereda las propiedades del padre, más las nuevas
}
