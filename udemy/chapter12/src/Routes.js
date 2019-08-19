import HomeComponent from './components/HomeComponent';
import UserComponent from './components/UserComponent';

export const routes = [
    {path:'/',component: HomeComponent},
    {path:'/users/:id',component: UserComponent}
]
