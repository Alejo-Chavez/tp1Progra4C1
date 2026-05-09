import { Component, inject } from '@angular/core';
import {  RouterModule } from "@angular/router";
import { AuthServices } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  auth = inject(AuthServices)
}
