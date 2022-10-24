import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecentItemsService {
  recentItems$ = new BehaviorSubject<number[]>([]);
  constructor() {}

  addNewRecentItem(id: number): void {
    const items = this.recentItems$.value;
    if (!items.includes(id)) {
      items.unshift(id);
      if (items.length > 3) {
        items.pop();
        this.recentItems$.next(items);
        console.log(items);
      }
    }
  }
}
