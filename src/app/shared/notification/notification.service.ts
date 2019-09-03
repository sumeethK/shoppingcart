import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification: Notification;


  constructor() { }

  notify(type, message) {
    this.notification = new Notification(type, message);
  }
}
