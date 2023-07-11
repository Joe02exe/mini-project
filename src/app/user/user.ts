export interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    role: 'admin' | 'user';
}