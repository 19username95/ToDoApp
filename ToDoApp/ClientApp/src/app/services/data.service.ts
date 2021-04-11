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
    console.log(1231)
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    });
  }
  updateTask(task: Task) {

    return this.http.put(this.url, task);
  }
  deleteTask(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
