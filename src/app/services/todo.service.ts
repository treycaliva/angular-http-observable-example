import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly URL = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) { }

  resolveTodos(): Observable<Todo> {
    console.log('Request is sent!');

    return this.http.get<Todo>(this.URL);
  }
}
