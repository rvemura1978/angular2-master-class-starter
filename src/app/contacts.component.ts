import { Component,OnInit } from '@angular/core';
import{EventBusServiceService} from './event-bus-service.service';



@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']

})
export class ContactsAppComponent implements OnInit{

  title:string;

  constructor(private eventBus: EventBusServiceService){}

  ngOnInit() {
    this.eventBus.observe('appTitleChange')
      .subscribe(title => this.title = title)
  }

}
