import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { WhoIam2 } from './features/who-iam2/who-iam2/who-iam2';
import { Login } from './features/login/login';

export const routes: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'who-iam2', component: WhoIam2},
      { path: 'login', component: Login}
     
];
