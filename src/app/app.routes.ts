import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { FAQComponent } from './faq/faq.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccountComponent } from './account/account.component';
import { filterAccessToAccountGuard } from './guards/filter-access-to-account.guard';
import { AccountListComponent } from './account-list/account-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  {
    path: 'FAQ',
    component: FAQComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },


  {
    path: 'account/:accountNumber',
    component: AccountComponent,
    // canActivate:[filterAccessToAccountGuard]

  },
  {
    path: 'accountname/:searchQuery',
    component: AccountListComponent,
  },
  {
    path: 'accounts',
    component: AccountListComponent,
  },
  {
    path:'**',
    component: NotfoundComponent
  }
];
