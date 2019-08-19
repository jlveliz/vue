import HomeComponent from './components/HomeComponent';
import UserComponent from './components/UserComponent';
import UserDetailComponent from './components/UserDetailComponent';

export const routes = [
    {
        path:'/',
        component: HomeComponent
    },
    {
        path:'/users',
        component: UserComponent,
        name: 'Users'
        
    },
    {  
        path:'/users/:id', 
        component:UserDetailComponent, 
        name:"UserDetail"
    }
]
