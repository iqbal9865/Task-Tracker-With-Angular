import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit () {
    if(!this.task || !this.day) {
      alert(`You Need to Add atleast One Task and it's Date Also`)
    }
    const newTask = {
      task : this.task,
      day : this.day,
      reminder : this.reminder
    }
    this.task = '';
    this.day = '';
    this.reminder = false;
  }
}
