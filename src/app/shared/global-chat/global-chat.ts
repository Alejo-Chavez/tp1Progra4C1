import { Component, EventEmitter, Output, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { ChatService } from '../../core/services/chat.service';
@Component({
  selector: 'app-global-chat',
  imports: [],
  templateUrl: './global-chat.html',
})
export class GlobalChat implements OnInit{
  private chatService = inject(ChatService);

  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    this.chatService.getMessages();
  }
  
}
