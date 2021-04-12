import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
  providers: [DataService]
})
export class TaskViewComponent implements OnInit {
  task: Task = new Task();
  tasks: Task[];

  constructor(private dataService: DataService) {
   // this.loadTasks();
  }

  ngOnInit() {
    this.loadTasks();
    this.tasks = [];
  }

  loadTasks() {
    this.dataService.getTasks()
      .subscribe((data: Task[]) => {
        this.tasks = data
      });
  }

  save() {
    if (this.task.id == null) {
    } else {
      this.dataService.updateTask(this.task)
        //.subscribe(data => this.loadTasks());
    }
  }

}
