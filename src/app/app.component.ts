import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: String = 'Gebeya'; // String

  private data = [{a: 1}, {a: 2}, {a: 3}]; // Array

  private isActive: Boolean = false; // Boolean;

  constructor() {
      this.data.forEach((value, key) => {
           console.log(`value of index ${key} = ${value}`);
      });
  }

  public getTitle(): String {
    return this.title;
  }

  public getData() {
      return this.data;
  }



}
