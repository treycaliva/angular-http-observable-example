import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../interface/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input()
  todo$: Observable<Todo>;

  constructor(private todoService: TodoService) { 
    this.todo$ = todoService.resolveTodos();
  }

  ngOnInit() {}
}
