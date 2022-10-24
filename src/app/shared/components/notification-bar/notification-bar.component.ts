import { NavigationEnd, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { INotification } from 'src/app/interfaces/notification.interface';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss'],
})
export class NotificationBarComponent {
  notifications$: Observable<INotification | void>;
  constructor(private notificationService: NotificationService) {
    this.notifications$ = this.notificationService.notifications$;
  }

  closeNotification() {
    this.notificationService.closeNotification();
  }
}
