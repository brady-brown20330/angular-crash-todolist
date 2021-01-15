import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

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
    console.log('toggleydoo')
    console.log(todo.title)
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log('deleteydoo')
    console.log(todo.title)

  }
}
