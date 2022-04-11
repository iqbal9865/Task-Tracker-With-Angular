import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: any =  Subscription;
  constructor(private uiservice : UiService) { 
    this.subscription = this.uiservice
    .onToggle()
    .subscribe(value => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  onSubmit () {
    if(!this.text || !this.day) {
      alert(`You Need to Add atleast One Task and it's Date Also`)
    }
    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder,
    };

    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
