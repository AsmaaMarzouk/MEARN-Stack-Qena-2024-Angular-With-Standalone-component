import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenService } from '../Services/user-authen.service';

export const userGuard: CanActivateFn = (route, state) => {
 const userAuth=inject(UserAuthenService);
 const router=inject(Router);

 if(userAuth.isUserLogged){
  return true;
 }
 else{
  alert("Please Login First");
  router.navigate(['/UserLogin']);
  return false;
 }

};
