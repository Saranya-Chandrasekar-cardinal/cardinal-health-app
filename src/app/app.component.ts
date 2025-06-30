import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Login';//'Ordering/Tracking';
  isLoginPage = false;

  constructor(private router: Router) {
    // Listen to route changes to determine if we're on the login page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = event.url === '/login' || event.url === '/';
    });

    // Check initial route
    this.isLoginPage = this.router.url === '/login' || this.router.url === '/';
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToOrdering() {
    this.router.navigate(['/ordering']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
