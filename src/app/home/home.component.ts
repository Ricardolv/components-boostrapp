import { Component, OnInit } from '@angular/core';
import { MessageService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private messageService: MessageService) { }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from Home Component to App Component!');
    }

    clearMessages(): void {
        // clear messages
        this.messageService.clearMessages();
    }

}
