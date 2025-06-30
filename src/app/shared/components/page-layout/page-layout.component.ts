import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main-container">
      <div class="content-area">
        <ng-content></ng-content>
      </div>
      <div class="banner-area">
        <div class="banner-item">Banner</div>
        <div class="banner-item">Banner2</div>
        <div class="banner-item">Banner3</div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        ©2024 Cardinal Health  |  Privacy Policy   |   Terms of Use 
      </div>
    </footer>
  `,
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {}
