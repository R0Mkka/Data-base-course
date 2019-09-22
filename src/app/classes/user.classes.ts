import { IUser, UserRoles } from '@models/user.models';

export class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
  educationalInstitution: string;
  email: string;
  password: string;
  role: UserRoles;

  constructor(user: IUser) {
    const { firstName, lastName, educationalInstitution, email, password, role } = user;

    this.id = Date.now().toString();
    this.firstName = firstName;
    this.lastName = lastName;
    this.educationalInstitution = educationalInstitution;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
