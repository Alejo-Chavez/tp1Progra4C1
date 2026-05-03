import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { WhoIam2 } from './features/who-iam2/who-iam2/who-iam2';

export const routes: Routes = [
      { path: '', redirectTo: 'who-iam2', pathMatch: 'full' },
      { path: 'who-iam2', component: WhoIam2},
     
];
