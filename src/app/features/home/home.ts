import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
})

export class Home {
  games = [{
    title: 'Juego 1',
    description: 'Descripción del juego 1',
    route: '/games/ahorcado',
    icon: 'fa-gamepad'
  },
  {
    title: 'Juego 2',
    description: 'Descripción del juego 2',
    route: '/mayor-o-menor',
    icon: 'fa-chess'
}]
}
