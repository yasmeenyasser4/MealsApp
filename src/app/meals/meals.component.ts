import { Component, inject, OnInit } from '@angular/core';
import { MealAPIService } from '../meal-api.service';
import { RouterLink } from '@angular/router';
import { Imeals } from '../imeals';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ionemeal } from '../ionemeal';
import { IsharedService } from '../ishared.service';
import { Router } from '@angular/router';
import { OnemealService } from '../onemeal.service';

@Component({
  selector: 'app-meals',
  imports: [RouterLink],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent implements OnInit {
  
   meals: Ionemeal[] = [];
  itemId: string | null = null;
  private readonly mealAPIService = inject(MealAPIService);
  private readonly onemealService = inject(OnemealService);

  constructor(private route: ActivatedRoute, private IsharedService:IsharedService ) {}

  ngOnInit(): void {
    this.getAllData('');
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
     
      
      if (this.itemId) {
        this.IsharedService.setItemId(this.itemId); 
        this.getMealData(this.itemId);
        if(this.itemId==" "){
          this.getAllData(this.itemId);
        }
      }
    
    });
  }
  getAllData(searchTerm: string): void {
    this.onemealService.getMealAll(searchTerm).subscribe({
      next: (res) => {
        this.meals = res.meals || []; 
        
      },
      error: (err) => {
        console.log( err);
      }
    });
  }
  getMealData(id: string): void {
    this.mealAPIService.getMeal(id).subscribe({
      next: (res) => {
        this.meals = res.meals;
       
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
 
}
