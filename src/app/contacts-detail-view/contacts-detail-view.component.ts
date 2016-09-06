import { Component, OnInit } from '@angular/core';
import {Contact} from './../models/contact';
import {ContactsServiceService} from './../contacts-service/contacts-service.service';
import {ActivatedRoute,Router  } from '@angular/router';



@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: 'contacts-detail-view.component.html',
  styleUrls: ['contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact:Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactsServiceService,
              private router:Router) {
  }

  ngOnInit() {
    /*
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
      .subscribe(contact => this.contact = contact);
*/
    this.route.params.subscribe(params => {
      // do something with params


      this.contactsService.getContact(params['id'])
        .subscribe(contact => this.contact = contact);
    });
  }




  navigateToEditor(contact:Contact) {
    this.router.navigate(['/contact',contact.id,'edit']);
  }

  navigateToList() {
    this.router.navigate(['']);
  }

}
