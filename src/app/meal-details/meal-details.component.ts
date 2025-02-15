import { Component, Input, OnInit } from '@angular/core';
import { IsharedService } from '../ishared.service';
import { ActivatedRoute } from '@angular/router';
import { MealAPIService } from '../meal-api.service';
@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent implements OnInit {
  meal: any = undefined; 

  constructor(
    private route: ActivatedRoute,
    private mealAPIService: MealAPIService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idMeal = params.get('id');
     

      if (idMeal) {
        this.getMealDetails(idMeal);
      }
    });
  }

  getMealDetails(idMeal: string): void {
    this.mealAPIService.getMealDetails(idMeal).subscribe({
      next: (res) => {
       
        this.meal = res.meals ? res.meals[0] : null; 
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}