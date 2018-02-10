import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { NewTodoComponent } from './new-todo/new-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    AboutComponent,
    NavComponent,
    TodosComponent,
    TodoComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
