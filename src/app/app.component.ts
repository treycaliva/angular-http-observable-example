import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './services/todo.service';
import { count, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @Input()
  // result$: Observable<any>;

  constructor() {
    // this.result$ = todoService.resolveTodos();
  }

  title = 'http-official';

  ngOnInit() {}
}
