import { CanActivateFn } from '@angular/router';
import { AccountComponent } from '../account/account.component';

export const filterAccessToAccountGuard: CanActivateFn = (route, state) => {
  const id = route.params['accountNumber'];

  if (id == '1') {
    return false;
  }
  return true;
};
