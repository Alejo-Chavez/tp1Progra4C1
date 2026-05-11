import { Component, inject } from '@angular/core';
import { GithubService } from '../services/github';
import { RepoCard } from '../components/repo-card/repoc-card';
@Component({
  selector: 'app-who-iam2',
  imports: [RepoCard],
  templateUrl: './who-iam2.html',
})
export class WhoIam2 {

  private github = inject(GithubService);

  user = this.github.user;
  repos = this.github.repos;
  loading = this.github.loading;
  error = this.github.error;

  constructor() {
    
  }

  ngOnInit() {
    this.github.loadUser();
  }

}
