import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { WhoIam2 } from './features/who-iam2/who-iam2/who-iam2';
import { Login } from './features/login/login';
import { Register } from './features/register/register';
import { Ahorcado } from './features/games/ahorcado/ahorcado';
import { MayorOMenor } from './features/games/mayor-o-menor/mayor-o-menor';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home},      
      { path: 'games/ahorcado', component: Ahorcado, canActivate: [authGuard]},
      { path: 'games/mayor-o-menor', component:MayorOMenor, canActivate: [authGuard]},
      { path: 'who-iam2', component: WhoIam2},
      { path: 'login', component: Login},
      { path: 'register', component: Register}
     
];
