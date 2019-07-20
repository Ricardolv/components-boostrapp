import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { User } from '../_models';
import { MessageService , UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loading = false;
  users: User[];

  ngOnInit() {
      this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });
  }

  constructor(private messageService: MessageService, private userService: UserService) { }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from Home Component to App Component!');
    }

    clearMessages(): void {
        // clear messages
        this.messageService.clearMessages();
    }

}
