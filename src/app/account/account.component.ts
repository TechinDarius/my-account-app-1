import { Component } from '@angular/core';
import { BalanceComponent } from '../balance/balance.component';
import { ActivatedRoute } from '@angular/router';

interface Account {
  name: string;
  balance: number;
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [BalanceComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = parseInt(data.get('accountNumber') || '');
      const accountIndex = id-1;
      this.accountsToShow = [this.accounts[accountIndex]];
    })

  }

  accounts: Account[] = [
    {
      name: 'Savings account',
      balance: 100,
    },
    {
      name: 'Checking account',
      balance: 200,
    },
  ];
  accountsToShow: Account[] = this.accounts;

  withdraw(account: Account, amount: number) {
    account.balance -= amount;
  }
  deposit(account: Account, amount: number) {
    account.balance += amount;
  }
}
