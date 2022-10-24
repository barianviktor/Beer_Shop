import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INotification } from '../interfaces/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications$ = new Subject<INotification | void>();
  constructor() {}
  successNotification(
    message: string,
    link?: {
      message: string;
      linkTo: string[];
    }
  ) {
    let notification: INotification = {
      message: message,
      status: 'SUCCESS',
      link: link,
    };
    this.notifications$.next(notification);
  }
  failureNotification(
    message: string,
    link?: {
      message: string;
      linkTo: string[];
    }
  ) {
    let notification: INotification = {
      message: message,
      status: 'FAILURE',
      link: link,
    };
    this.notifications$.next(notification);
  }
  closeNotification() {
    this.notifications$.next();
  }
}
