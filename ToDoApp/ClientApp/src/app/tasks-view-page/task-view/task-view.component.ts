import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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

  searchString: string;

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.tasks = [];
    this.loadTasks();
  }

  async loadTasks() {
    this.tasks = await this.dataService.getTasks();
  }

  save() {
    if (this.task.id != null) {
      this.dataService.updateTask(this.task);
      this.loadTasks();
    }
  }

  async search() {
    this.tasks = await this.dataService.getTasks({
      'title': this.searchString
    })
  }
}
