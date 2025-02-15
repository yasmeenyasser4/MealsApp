import { Component, signal, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filteration',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './filteration.component.html',
  styleUrl: './filteration.component.scss'
})
export class FilterationComponent {

  items = [
    { id: " ", name: "All" },
    { id: "beef", name: "Beef" },
    { id: "breakfast", name: "BreakFast" },
    { id: "chicken", name: "Chicken" },
    { id: "dessert", name: "Dessert" },
    { id: "Goat", name: "Goat" },
    { id: "lamb", name: "Lamb" },
    { id: "Miscellaneous", name: "Miscellaneous" },
    { id: "pasta", name: "Pasta" },
    { id: "Pork", name: "Pork" },
    { id: "seafood", name: "Seafood" },
    { id: "side", name: "Side" },
    { id: "starter", name: "Starter" },
    { id: "vegan", name: "Vegan" },
    { id: "vegetarian", name: "Vegetarian" },
  ];

  screenWidth: number = 1024; 

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {
    
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  isSmallScreen(): boolean {
    return this.screenWidth < 768;
  }

  navigateToMeal(event: Event): void {
    const mealId = (event.target as HTMLSelectElement).value;
    if (mealId) {
      this.router.navigate(['/home/meals', mealId]);
    }
  }
}
