import { Component } from '@angular/core';
import { MessagesService } from '../message.service';

@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.css']
})
export class ShowMessagesComponent {

  panelOpenState: boolean = false;

    constructor(public messagesService: MessagesService) {
    }

    ngOnInit(): void {
    }

    get messages() {
        return this.messagesService.messages;
    }

}
