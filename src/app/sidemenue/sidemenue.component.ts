import { Component,signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidemenue',
  imports: [CommonModule,RouterLink],
  templateUrl: './sidemenue.component.html',
  styleUrl: './sidemenue.component.scss'
})
export class SidemenueComponent {
  isMenuOpen = signal(false);
  isSmallScreen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
    }
  }

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  checkScreenSize() {
    if (typeof window !== 'undefined') {
      const isSmall = window.innerWidth < 768;
      this.isSmallScreen.set(isSmall);
      this.isMenuOpen.set(!isSmall); // مفتوح دائمًا في الشاشات الكبيرة
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    if (typeof document !== 'undefined') {
      const targetElement = event.target as HTMLElement | null;
      if (this.isSmallScreen() && targetElement && !targetElement.closest('.side-menu, .menu-button')) {
        this.isMenuOpen.set(false);
      }
    }
  }
}



