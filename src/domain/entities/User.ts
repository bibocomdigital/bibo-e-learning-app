import { UserRole } from "@types";
import { Email } from "domain/value-objects";

export class User {
  private _id: string;
  private _email: Email;
  private _password: string;
  private _role: UserRole;
  private _firstName?: string;
  private _lastName?: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: string,
    email: Email,
    password: string,
    role: UserRole.student,
    firstName?: string,
    lastName?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    if (password.length < 6) throw new Error('Le mot de passe doit avoir au moins 6 caractères');

    this._id = id;
    this._email = email;
    this._password = password;
    this._role = role;
    this._firstName = firstName;
    this._lastName = lastName;
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
  }

  get id() { return this._id; }
  get email() { return this._email; }
  get role() { return this._role; }
  get fullName() { return `${this._firstName || ''} ${this._lastName || ''}`.trim(); }

  changePassword(newPassword: string) {
    if (newPassword.length < 6) throw new Error('Le mot de passe doit avoir au moins 6 caractères');
    this._password = newPassword;
    this._updatedAt = new Date();
  }

  promoteToInstructor() {
    if (this._role !== UserRole.instructor) {
      this._role = UserRole.instructor;
      this._updatedAt = new Date();
    }
  }
}
