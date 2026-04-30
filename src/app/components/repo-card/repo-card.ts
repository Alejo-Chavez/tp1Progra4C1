import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  imports: [],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.css',
})
export class RepoCard {
  @Input() repos: any;
}
