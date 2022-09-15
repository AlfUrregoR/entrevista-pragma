export interface UserInfoInterface {
  msg: string;
  token?: string;
  userInfo: {
    age?: number;
    city?: string;
    documentNumber?: string;
    email?: string;
    lastName?: string;
    name?: string;
    pass?: string;
    phone?: string;
  };
}
