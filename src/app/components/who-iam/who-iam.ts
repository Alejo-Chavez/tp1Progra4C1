import { Component, inject } from '@angular/core';
import { GithubService } from '../../services/github';
import { RepoCard } from "../repo-card/repo-card";

@Component({
  selector: 'app-who-iam',
  standalone: true,
  imports: [RepoCard],
  templateUrl: './who-iam.html',
  styleUrl: './who-iam.css',
})
export class WhoIAm {

  private github = inject(GithubService);

  user = this.github.user;
  repos = this.github.repos;
  loading = this.github.loading;
  error = this.github.error;

  constructor() {
    this.github.loadUser();
  }
}