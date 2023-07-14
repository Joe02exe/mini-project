import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from './task/task';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksURL = 'api/tasks';
  private changesSubject = new Subject<void>();
  public changes$: Observable<void>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.changes$ = this.changesSubject.asObservable();
  }

  addTask(task: Task): Observable<any> {
    return this.http.post<Task>(this.tasksURL, task, this.httpOptions).pipe(
      tap(_ => {
        this.log(`added task id=${task.id}`),
        this.changesSubject.next();
      }),
      catchError(this.handleError<any>('addTask'))
    );
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put<Task>(this.tasksURL, task, this.httpOptions).pipe(
      tap(_ => {
        this.log(`updated task id=${task.id}`),
        this.changesSubject.next();
      }),
      catchError(this.handleError<any>('updateTask'))
    );
  }  

  deleteTask(task: Task): Observable<any> {
    const url = `${this.tasksURL}/${task.id}`;

    return this.http.delete(url, this.httpOptions).pipe(
      tap(_ => {
        this.log(`deleted task with id=${task.id}`),
        this.changesSubject.next();
      }),
      catchError(this.handleError<any>('deleteTask'))
    );
  } 

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksURL).
    pipe(tap(_ => {
      this.log(`fetched all tasks`)
    }),
        catchError(this.handleError<Task[]>('getTasks', []))
      );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

  private log(message: string) {
    console.log("logger active: "+ message)
  }  
}
