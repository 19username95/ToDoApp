import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private dataService: DataService) {
    this.task.id = 0;
    this.task.title = "";
    this.task.dueDate = new Date();
    this.task.isComplete = false;
  }

  ngOnInit() {
  }

  async add(f: NgForm) {
    this.task.title = f.value.title;
    this.task.dueDate = f.value.dueDate;

    try {
      const res = await this.dataService.createTask(this.task);
      console.log('res', res)
    } catch(err) {
      console.log('err', err)
    }
  }
}
