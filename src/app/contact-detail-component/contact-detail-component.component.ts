import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Contact} from './../models/contact';

@Component({
  selector: 'trm-contact-detail-component',
  templateUrl: 'contact-detail-component.component.html',
  styleUrls: ['contact-detail-component.component.css']

})
export class ContactDetailComponentComponent implements OnInit {
  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<void>();





ngOnInit() {




}

}
