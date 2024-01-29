import { Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ObsAndOperatorsComponent } from './Components/obs-and-operators/obs-and-operators.component';
import { UserTemplateFormComponent } from './Components/User/user-template-form/user-template-form.component';
import { UserReactiveFormComponent } from './Components/User/user-reactive-form/user-reactive-form.component';
import { UserAuthenComponent } from './Components/user-authen/user-authen.component';
import { userGuard } from './Guards/user.guard';

export const routes: Routes = [
  // first match wins

  { path: '', component: MainComponent }, // default path
  { path: 'Home', component: MainComponent, title: 'Home page' },
  {
    path: 'Products',
    component: ProductsListComponent,
    title: 'Products list page',
    canActivate:[userGuard]
  },
  {
    path: 'ProductsParent',
    component: ProductsParentComponent,
    title: 'Products parent page',

  },
  {path:'prd/:productID',component:ProductDetailsComponent,title:"Product details page"},
  { path: 'AboutUs', component: AboutUsComponent, title: 'About Page' },
  { path: 'Obs', component: ObsAndOperatorsComponent, title: 'Observer Page' },
  { path: 'UserTemplate', component: UserTemplateFormComponent, title: 'User Template Page' },
  { path: 'UserReactive', component: UserReactiveFormComponent, title: 'User Reactive Page' },
  { path: 'UserLogin', component: UserAuthenComponent, title: 'User Auth Page' },
  { path: 'UserLogout', component: UserAuthenComponent, title: 'User Auth Page' },
  { path: '**', component: NotFoundPageComponent, title: 'Not found page' },
  //wild card path => not found page
];




// second case
// export const routes: Routes = [
//   // first match wins
// {path:'main',component:GroupOfRoutesComponent,children:[
//   { path: '', component: MainComponent }, // default path
//   { path: 'Home', component: MainComponent, title: 'Home page' },
//   {
//     path: 'Products',
//     component: ProductsListComponent,
//     title: 'Products list page',
//   },
//   {
//     path: 'ProductsParent',
//     component: ProductsParentComponent,
//     title: 'Products parent page',
//   },
//   { path: 'AboutUs', component: AboutUsComponent, title: 'About Page' },
// ]},

//   { path: '**', component: NotFoundPageComponent, title: 'Not found page' },
//   //wild card path => not found page
// ];
