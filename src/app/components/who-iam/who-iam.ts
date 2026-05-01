import { Component, inject, OnDestroy, OnInit, HostListener } from '@angular/core';
import { GithubService } from '../../services/github';
import { RepoCard } from "../repo-card/repo-card";

@Component({
  selector: 'app-who-iam',
  standalone: true,
  imports: [RepoCard],
  templateUrl: './who-iam.html',
  styleUrl: './who-iam.css',
})
export class WhoIAm implements OnInit, OnDestroy {

  private github = inject(GithubService);

  user = this.github.user;
  repos = this.github.repos;
  loading = this.github.loading;
  error = this.github.error;

  sidebarVisible = false;
  private idleTimer: any;
  private hideTimeout: any;

  constructor() {
    this.github.loadUser();
  }

  ngOnInit() {
    this.sidebarVisible = true;
    this.scheduleHide();
  }

  ngOnDestroy() {
    clearTimeout(this.idleTimer);
    clearTimeout(this.hideTimeout);
  }

  onActivity() {
    clearTimeout(this.hideTimeout);
    if (!this.sidebarVisible) {
      this.sidebarVisible = true;
    }
    this.scheduleHide();
  }

  scheduleHide() {
    this.hideTimeout = setTimeout(() => {
      this.sidebarVisible = false;
    }, 3000);
  }

  onMouseEnter() {
    clearTimeout(this.hideTimeout);
    this.sidebarVisible = true;
  }

  onMouseLeave() {
    this.scheduleHide();
  }
}