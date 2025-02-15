import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsharedService {
  private itemId: string | null = null;
  private itemIdSource = new BehaviorSubject<string | null>(null);
  currentItemId = this.itemIdSource.asObservable(); 

  setItemId(id: string) {
    this.itemIdSource.next(id); 
  }
  getItemId(): string | null {
    return this.itemId;
  }
}
