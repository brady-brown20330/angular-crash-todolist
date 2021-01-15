import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(public todoService:TodoService) { }

  ngOnInit(): void {
  }

  //set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  //on toggle
  onToggle(todo) {

    //toggle UI
    todo.completed = !todo.completed;
    //toggle server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo)
    });
  }

  onDelete(todo) {
    console.log('deleted')
    console.log(todo.title)

  }
}
