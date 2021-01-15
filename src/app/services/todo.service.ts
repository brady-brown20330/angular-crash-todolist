import { Injectable } from '@angular/core';
import  { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = "https://jsonplaceholder.typicode.com/todos?_limit=5";
  todosLimit = '?_limit=5'

  constructor(public http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
