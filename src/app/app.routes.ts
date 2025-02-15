import { NotfoundComponent } from './notfound/notfound.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
    { path: "", redirectTo: "home/meals/ ", pathMatch: "full" },  

    { 
        path: "home", 
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        title: "meals",
        children: [
            { 
                path: "meals/:id", 
                loadComponent: () => import('./meals/meals.component').then(m => m.MealsComponent), 
                title: "meals",
                data: { renderMode: 'dynamic' } 
            }
        ]
    },

    { 
        path: "details/:id", 
        loadComponent: () => import('./meal-details/meal-details.component').then(m => m.MealDetailsComponent), 
        title: "mealDetails" ,
        data: { renderMode: 'dynamic' } 
    },

    { 
        path: "**", 
        component:NotfoundComponent ,
    }
];

