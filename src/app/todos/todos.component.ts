import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private todos = ['1st Todo', 'new Todo', '2nd Todo', 'Third Todo'];
  constructor() { }

  ngOnInit() {
  }

  getTodo() {
    return this.todos;
  }

}
