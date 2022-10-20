import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhislistService {
  whistlist$ = new BehaviorSubject<number[]>([]);
  constructor() {}
  addToList(id: number): void {
    let list = this.whistlist$.getValue();
    list.push(id);
    this.whistlist$.next(list);
  }
  removeFromList(id: number): void {
    let list = this.whistlist$.getValue();
    list.splice(
      list.findIndex((item: number) => {
        return item == id;
      }),
      1
    );
    this.whistlist$.next(list);
  }
  isInTheList(id: number): boolean {
    let list = this.whistlist$.getValue();
    return list.includes(id);
  }

  addOrRemoveFromList(id: number): void {
    if (this.isInTheList(id)) {
      this.removeFromList(id);
    } else {
      this.addToList(id);
    }
  }
}
