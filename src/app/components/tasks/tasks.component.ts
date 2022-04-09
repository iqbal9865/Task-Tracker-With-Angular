import { Observable } from 'rxjs';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[] = [];
  count = 0;

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => this.tasks = tasks);
  }

  sendEvent(value: any) {
    this.taskService.testEvent.next(value);
  }
  increaseCounter(counter: any) {
    this.taskService.anotherTestEvent.next(counter)
  }

  deleteTask(task:any) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }
  toggleReminder(task:any) {
    task.reminder = !task.reminder;
  }
}
