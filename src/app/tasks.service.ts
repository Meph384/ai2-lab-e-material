import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  readonly baseUrl: string = "http://localhost:48306";
  constructor(
    private http: HttpClient
  ) { }

  public  index(archived: boolean = false): Observable<Task[]> {
    const requestUrl: string = this.baseUrl + "/todos";
    return this.http.get<Task[]>(requestUrl, {
      params: {
        archived: archived,
        _sort: "id",
        _order: "desc"
      }
    });
  }

  public  post(task: Task): Observable<Task> {
    const requestUrl: string = this.baseUrl + "/todos";
    return this.http.post(requestUrl, task);
  }

  public put(task: Task): Observable<Task> {
    const requestUrl: string = this.baseUrl + "/todos/" + task.id;
    return this.http.put(requestUrl, task);
  }

  public delete(task: Task): Observable<Task> {
    const requestUrl: string = this.baseUrl + "/todos/" + task.id;
    return this.http.delete(requestUrl);
  }
}
