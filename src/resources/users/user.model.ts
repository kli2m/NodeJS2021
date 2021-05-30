import { v4 as uuid } from 'uuid';
import {userType} from './user.types'
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
  }: userType = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User ):userType {
      const { id, name, login } = user;
      return { id, name, login };
  }
}

export default User;
