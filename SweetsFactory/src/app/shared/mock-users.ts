import { User } from '../shared/model/user';
import { MenuItem } from './menuItem/menuItem.component';

export const USERS: User[] = [
  { id: 3, name: 'test', password:'test1', isAdmin: false },
  { id: 2, name: 'alex', password:'test2', isAdmin: false },
  { id: 13, name: 'admin', password:'admin', isAdmin: true },
];

export const ADMIN : MenuItem[] = [
  {pathName:'Home', path:'/home'},
  {pathName:'Categories', path:'/categories'},
  {pathName:'Orders', path:'/orders'},
];

export const BUYER: MenuItem[] =[
  {pathName:'Home', path:'/home'},
  {pathName:'Orders', path:'/my-orders'},
];