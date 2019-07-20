import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

import { MessageService, AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'components-boostrapp';

  currentUser: User;
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService,
              private router: Router,
              private authenticationService: AuthenticationService) {
                this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

                // subscribe to home component messages
                this.subscription = this.messageService.getMessage().subscribe(message => {
                  if (message) {
                    this.messages.push(message);
                  } else {
                    // clear messages when empty message received
                    this.messages = [];
                  }
                });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

}
