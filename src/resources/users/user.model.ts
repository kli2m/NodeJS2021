import { v4 as uuid } from 'uuid';

/**
 * Class User
 *
 * @class  User 
 * @property {string} id - id
 * @property {string} name - name
 * @property {string} login - login
 * @property {string} password - password
 */


class User {
  id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User ) {
      const { id, name, login } = user;
      return { id, name, login };
  }
}

interface UserCreateType {
  name: string,
  login: string,
  password: string
}

interface RequestsParams {
  id: string
}

interface UserGetFuncType {
  (id: string): Promise<User | undefined>
}

interface UserCreateFuncType {
  (user: UserCreateType): Promise<User | undefined>
}

interface UserPutFuncType {
  (id: string, user: UserCreateType): Promise<User | undefined>
}

interface UserDelFuncType {
  (id: string): Promise<void>
}

export {
  User,
  RequestsParams,
  UserGetFuncType,
  UserCreateFuncType,
  UserPutFuncType,
  UserDelFuncType
}
