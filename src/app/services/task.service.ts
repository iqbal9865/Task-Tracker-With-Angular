import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks";

  public testEvent: BehaviorSubject<any>;
  public anotherTestEvent: BehaviorSubject<any>;
  constructor(private http : HttpClient) {

    this.testEvent = new BehaviorSubject('');
    this.anotherTestEvent = new BehaviorSubject('');

  }

  getTask (): Observable <Task[]> {
    return this.http.get <Task[]> (this.apiUrl)
  }

  deleteTask(task : Task): Observable<Task> {
    const url =  `${this.apiUrl}/${task.id}`;
    return this.http.delete <Task> (url)
  }
}
