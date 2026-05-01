import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Importo un servicio que angular crea por mi, este caso http client
import { provideHttpClient } from '@angular/common/http';
import { Header } from './components/header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('prograTP1');
}

export const appConfig = {
  providers: [provideHttpClient()]
};

