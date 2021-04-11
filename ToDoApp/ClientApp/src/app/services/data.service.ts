import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable()
export class DataService {

  private url = "/api/Tasks";

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get(this.url);
  }

  getTask(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createTask(task: Task) {
    return this.http.post(this.url, task);
  }
  updateTask(task: Task) {

    return this.http.put(this.url, task);
  }
  deleteTask(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
