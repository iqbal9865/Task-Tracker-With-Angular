import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-task';
import { Task } from '../Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTask (): Observable <Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
  constructor() { }
}
