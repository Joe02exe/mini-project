import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<any> {
    return this.http.post(this.userURL, user, this.httpOptions).pipe(
      tap(_ => this.log(`added user id=${user.username}`)),
      catchError(this.handleError<any>('addUser'))
    );
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.userURL, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.username}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }  

  deleteUser(user: User): Observable<any> {
    const url = `${this.userURL}/${user.username}`;

    return this.http.delete(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${user.username}`)),
      catchError(this.handleError<any>('deleteUser'))
    );
  } 

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userURL).
    pipe(tap(_ => this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }
  getUser(username :String): Observable<User> {
    const url = `${this.userURL}/${username}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${username}`)),
      catchError(this.handleError<User>(`getUser id=${username}`))
    );
    }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    private log(message: string) {
      console.log("logger active: "+ message)
    }  
}
