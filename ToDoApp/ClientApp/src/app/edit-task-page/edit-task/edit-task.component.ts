import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  providers: [DataService]
})
export class EditTaskComponent implements OnInit {

  task: Task;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
    try {
      this.route.params.subscribe(async (data) => {
        await this.dataService.getTask(data.id)
          .subscribe((task: Task) => {
            this.task = task
          });
      });

    }
    catch { }
  }

  ngOnInit() {
  }

  async save(f: NgForm) {
    this.task.title = f.value.title;
    this.task.dueDate = f.value.dueDate;

    try {
      const res = await this.dataService.updateTask(this.task);
      console.log('res', res)
    } catch (err) {
      console.log('err', err)
    }

    this.router.navigateByUrl('/tasks');
  }

  async delete() {
    try {
      const res = await this.dataService.deleteTask(this.task.id);
      console.log('res', res)
    } catch (err) {
      console.log('err', err)
    }

    this.router.navigateByUrl('/tasks');
  }
}
