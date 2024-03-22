import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
interface Account {
  id: number;
  name: string;
  balance: number;
  imageUrl: string;
}

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss',
})
export class AccountListComponent {
  accounts: Account[] = [
    {
      id: 1,
      name: 'Savings account',
      balance: 100,
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/03/12/16/37/piggy-bank-7847304_1280.png',
    },
    {
      id: 2,
      name: 'Checking account',
      balance: 200,
      imageUrl:
        'https://static.vecteezy.com/system/resources/previews/021/314/124/original/bank-account-icon-design-free-vector.jpg',
    },
  ];

  accountsToShow: Account[] = this.accounts;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => {
      const searchQuery = data.get('searchQuery') || '';
      this.accountsToShow = this.accounts.filter((account) => {
        return account.name.toLowerCase().startsWith(searchQuery);
      });
    });
  }
}
