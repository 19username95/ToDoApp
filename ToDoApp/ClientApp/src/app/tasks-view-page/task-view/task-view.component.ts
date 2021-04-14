import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { DataService } from '../../services/data.service';
import { ORDERBY_TYPES } from './../../constants';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
  providers: [DataService]
})
export class TaskViewComponent implements OnInit {
  task: Task = new Task();
  tasks: Task[];
  orderTypes: Array<Object>;

  selectedOrder: string;
  searchString: string;
  completedFilter: boolean;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.tasks = [];
    this.loadTasks();
    this.orderTypes = ORDERBY_TYPES;
  }

  async loadTasks() {
    this.tasks = await this.dataService.getTasks();
  }
  async refresh() {
    console.log('HERE')
    this.tasks = await this.dataService.getTasks({
      'title': this.searchString,
      'filterCompleted': this.completedFilter,
      'order': this.selectedOrder
    });
  }

  save() {
    if (this.task.id != null) {
      this.dataService.updateTask(this.task);
      this.loadTasks();
    }
  }

  async orderBy(value) {
    this.selectedOrder = value;
    this.refresh();
  }
}
