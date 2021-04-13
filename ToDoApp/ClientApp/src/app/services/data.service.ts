import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable()
export class DataService {

  private url = "/api/Tasks";

  constructor(private http: HttpClient) {
  }

  async getTasks(query = {}) {
    try {
      const queryString = Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
      const res = await fetch(`${this.url}?${queryString}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json;charset=utf-8' },
      });
      return res.json()
    } catch (err) {
      console.log('DataService | getTasks', err)
    }
  }

  getTask(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createTask(task: Task) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    });
  }

  updateTask(task: Task) {
    return fetch(this.url + '/' + task.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    });
  }

  deleteTask(id: number) {
    return fetch(this.url + '/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(id)
    });
  }
}
