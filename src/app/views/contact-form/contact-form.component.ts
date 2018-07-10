import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactBookService } from '../../shared/modal/contactbook.service';
import { ContactBook } from '../../shared/modal/contactbook.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  flag = false;
  contacts: any[];
  contactbookList: ContactBook[];

  @ViewChild('f') form: any;

  constructor( private service: ContactBookService ) {
  }

  ngOnInit() {
  }

  save(contact) {
      if (this.form.valid) {
        this.service.create(contact)
        .subscribe(response => {
          });
          this.flag = true;
          this.form.reset();
      } else {
        alert('Form not valid');
      }
  }
}
