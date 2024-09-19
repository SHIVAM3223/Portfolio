import { Component } from '@angular/core';
import { DevlyIconComponent } from '../devly-icon/devly-icon.component';
import { RouterLink } from '@angular/router';
import { LinkButtonComponent } from '../link-button/link-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DevlyIconComponent, RouterLink, LinkButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styles: `
  li{
    a{
      @apply block rounded-md py-1 px-2 transition-all hover:scale-105 hover:text-cyan-500 hover:bg-neutral-400/10 active:scale-90;
    }
  }
  .sidebar {
    @apply fixed top-14 right-0 h-full w-64 bg-neutral-950/90 transform transition-transform duration-300 ease-in-out;
  }
  .sidebar.hidden {
    @apply translate-x-full;
  }
`,
})
export class NavbarComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}