import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Todo } from './model/todo';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TodoComponent, FooterComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task = new Todo(1, '待辦事項 A');

  onStateChange(state: boolean): void {
    if (state) {
      this.task.setFinished(new Date());
    } else {
      this.task.finishDate = undefined;
      this.task.hasFinished = false;
    }
  }
}
