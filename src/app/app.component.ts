import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-front';
  private readonly notifier: NotifierService;
  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {

  }
  notify() {
    this.notifier.notify("info", "Notifier is working successfully :)")
  }

  notify2() {
    this.notifier.notify("error", "Notifier is working successfully :)")
  }
}
