import { Component, OnInit } from '@angular/core';
import { UiService } from "../../services/ui.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: any =  Subscription;

  constructor(private uiservice: UiService) {
    this.subscription = this.uiservice
    .onToggle()
    .subscribe(value => (this.showAddTask = value))
  }

  ngOnInit(): void {}

  toggleAddTask () {
    this.uiservice.toggleAddTask()
  }

}
