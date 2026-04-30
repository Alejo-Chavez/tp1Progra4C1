import { Routes } from '@angular/router';
import { WhoIAm } from './components/who-iam/who-iam';
import { Component } from '@angular/core';

export const routes: Routes = [
      { path: '', redirectTo: 'who-iam', pathMatch: 'full' },
      { path: 'who-iam', component: WhoIAm}
     
];
