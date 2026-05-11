import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { WhoIam2 } from './features/who-iam2/who-iam2/who-iam2';
import { Login } from './features/login/login';
import { Register } from './features/register/register';
import { GameLayout } from './features/games/layout/layout';
import { Ahorcado } from './features/games/ahorcado/ahorcado';
import { MayorOMenor } from './features/games/mayor-o-menor/mayor-o-menor';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'games', component: GameLayout, canActivate: [authGuard],children: [
                  { path: 'ahorcado', loadComponent: () =>import('./features/games/ahorcado/ahorcado').then((m) => m.Ahorcado)},
                  { path: 'mayor-o-menor', loadComponent: () => import('./features/games/mayor-o-menor/mayor-o-menor').then((m) => m.MayorOMenor)}]},
      { path: 'who-iam2', component: WhoIam2 },
      { path: 'login', component: Login },
      { path: 'register', component: Register }

];
