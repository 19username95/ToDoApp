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
  a: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadTasks();
    this.tasks = [];
    console.log(this.tasks);
  }

  loadTasks() {
    this.dataService.getTasks()
      .subscribe((data: Task[]) => {
        this.tasks = data
        console.log(this.tasks)
      });
  }

  save() {
    if (this.task.id == null) {
      this.dataService.createTask(this.task)
        .subscribe((data: Task) => this.tasks.push(data));
    } else {
      this.dataService.updateTask(this.task)
        .subscribe(data => this.loadTasks());
    }
    this.cancel();
  }
  editProduct(t: Task) {
    this.task = t;
  }
  cancel() {
    this.task = new Task();
  }
  delete(t: Task) {
    this.dataService.deleteTask(t.id)
      .subscribe(data => this.loadTasks());
  }
  add() {
    this.cancel();
  }

}
