import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './views/contact-form/contact-form.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';

const routes: Routes = [
  {path: '', component: ContactListComponent },
  {path: 'add-contact', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
