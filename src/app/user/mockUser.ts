import { User } from './user';

export const USERS: User[] = [
  { username: "john", firstName: "John", lastName: "Doe", password: "passwd", birthDate: new Date("2000-01-01"), role: "admin"},
  { username: "harry", firstName: "Harry", lastName: "Kane", password: "passwd", birthDate: new Date("1980-09-10"), role: "user"},
  { username: "raheem", firstName: "Raheem", lastName: "Sterling", password: "passwd", birthDate: new Date("1997-06-01"), role: "user"},
  { username: "mason", firstName: "Mason", lastName: "Mount", password: "passwd", birthDate: new Date("2001-04-16"), role: "admin"},
];