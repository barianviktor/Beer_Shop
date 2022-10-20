import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { INotification } from 'src/app/interfaces/notification.interface';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss'],
})
export class NotificationBarComponent implements OnInit {
  notifications$: Observable<INotification | void>;
  constructor(private notificationService: NotificationService) {
    this.notifications$ = this.notificationService.notifications$;
  }

  ngOnInit(): void {}
  closeNotification() {
    this.notificationService.closeNotification();
  }
}
