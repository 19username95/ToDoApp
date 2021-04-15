import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Task } from '../../models/task';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  providers: [DataService]
})
export class AddTaskComponent implements OnInit {
  task: Task = new Task;

  constructor(private dataService: DataService,
              private titleService: Title) {
    this.refresh();
    this.titleService.setTitle("Add Task");
  }

  ngOnInit() {
  }

  async add() {

    try {
      const res = await this.dataService.createTask(this.task);
      console.log('res', res)
    } catch(err) {
      console.log('err', err)
    }
  }

  refresh() {
    this.task.id = 0;
    this.task.title = "";
    this.task.dueDate = new Date();
    this.task.isComplete = false;
  }
}
