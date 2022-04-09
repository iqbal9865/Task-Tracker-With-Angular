import { TaskService } from './../../services/task.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task : any;
  @Output() onDeleteTask : EventEmitter <Task> = new EventEmitter()

  counter: any;
  anotherCounter: any;

  faTimes = faTimes;

  constructor(private tsk:TaskService) {
    this.tsk.testEvent.subscribe(data => {
      this.counter = data;
    });

    this.tsk.anotherTestEvent.subscribe(data => {
      this.anotherCounter = data + data;
    })

   }

  ngOnInit(): void {
  }

  onDelete (task:any) {
    this.onDeleteTask.emit(task)
  }
}
