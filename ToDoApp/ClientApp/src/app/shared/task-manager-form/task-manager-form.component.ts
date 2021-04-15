import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task-manager-form',
  templateUrl: './task-manager-form.component.html',
  styleUrls: ['./task-manager-form.component.scss']
})
export class TaskManagerFormComponent implements OnInit {

  @Input() formType: string;
  @Input() task: Task = {};
  @Input() submit: Function;
  @Input() delete: Function;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
}
