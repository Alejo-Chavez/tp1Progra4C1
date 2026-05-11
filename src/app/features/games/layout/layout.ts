import { Component } from '@angular/core';


import { RouterOutlet } from '@angular/router';
import { GlobalChat } from '../../../shared/global-chat/global-chat'; 

@Component({
  selector: 'app-game-layout',
  imports: [RouterOutlet, GlobalChat],
  templateUrl: './layout.html'
  
})
export class GameLayout {
  mostrarChat = false;

  toggleChat() {
    this.mostrarChat = !this.mostrarChat;
  }
}