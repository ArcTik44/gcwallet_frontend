export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  cards: string[];
}

export interface LoginCred {
  email: string;
  password: string;
}

export interface RegisterCred {
  username: string;
  email: string;
  password: string;
}

export interface UpdateCred {
  username: string | null;
  password: string | null;
}
