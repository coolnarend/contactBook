import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactBookService } from '../../shared/modal/contactbook.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  flag2 = false;
  contacts: any[];

  selectedContact: any = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    phone: 0,
    status: ''
  };

  @ViewChild('ef') editform: any;

  constructor( private service: ContactBookService ) { }

  ngOnInit() {
    this.service.getContacts()
      .subscribe(
        response => {
          this.contacts = response.json();
        },
        // error handling
        (error: Response) => {
          if (error.status === 400) {
          } else {
              alert('An unexpeted error occured');
              console.log(error);
          }
        });
  }

  update(contact) {
    this.flag2 = true;
    this.selectedContact = contact;
  }

  save(contact) {
      if (this.editform.valid) {
        this.service.edit(contact)
        .subscribe(response => { });
      } else {
        alert('Form not valid');
      }
      this.flag2 = false;
  }

  delete(contact) {
    if (confirm('Are you sure, you want to delete this contact!')) {
      this.service.delete(contact)
      .subscribe(
        response => {
          const index = this.contacts.indexOf(contact);
          this.contacts.splice(index, 1);
        },
        // error handling
        (error: Response) => {
          if (error.status === 404) {
            alert('This contact has already been deleted');
          } else {
              alert('An unexpeted error occured');
              console.log(error);
          }
        });
    }
  }

}
