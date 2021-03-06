import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
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
  tasks: Task[];
  tasksResponse: { array: Array<Object>, count: number };
  orderTypes: Array<Object>;

  selectedOrder: string;
  searchString: string;
  completedFilter = false;
  perPage = 8;
  pageIndex = 0;
  pagesCount = 0;

  constructor(private dataService: DataService, private titleService: Title) {
    this.titleService.setTitle("Tasks");
  }

  ngOnInit() {
    this.tasks = [];
    this.loadTasks();
    this.orderTypes = ORDERBY_TYPES;
    this.perPage = 8;
    this.pageIndex = 0;
  }

  async loadTasks() {
    this.tasksResponse = await this.dataService.getTasks();
    this.tasks = this.tasksResponse.array;
    this.setCurrentPagesCount();
  }

  async refresh() {
    this.tasksResponse = await this.dataService.getTasks({
      'title': this.searchString,
      'filterCompleted': this.completedFilter,
      'order': this.selectedOrder,
      'perPage': this.perPage,
      'pageIndex': this.pageIndex
    });
    this.tasks = this.tasksResponse.array;
    this.setCurrentPagesCount();
  }

  setCurrentPagesCount() {
    this.pagesCount = Math.ceil(this.tasksResponse.count / this.perPage);
  }

  async changeCompleteStatus(id) {
    const task = this.tasks.find(t => t.id === id);
    task.isComplete = !task.isComplete;
    const res = await this.dataService.updateTask(task);
    this.pageIndex = 0;
    this.refresh();
  }

  async orderBy(value) {
    this.selectedOrder = value;
    this.pageIndex = 0;
    this.refresh();
  }

  perPageChange(value) {
    this.perPage = value;
    this.refresh();
  }

  async goNextPage() {
    if (this.pageIndex < this.pagesCount - 1) {
      this.pageIndex++;
    this.refresh();
    }
  }

  async goPrevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.refresh();
    }
  }
}
