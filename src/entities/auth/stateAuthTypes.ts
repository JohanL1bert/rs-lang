interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface INewUser {
  name: string;
  email: string;
  password: string;
}

export interface IStateAuth {
  user: IUser | null;
  token: string;
  isAuth: boolean;
  error: boolean;
  isRegistered: boolean;
  signin: (email: string, password: string) => void;
  signout: () => void;
  auth: () => void;
  register: (param: INewUser) => void;
}
