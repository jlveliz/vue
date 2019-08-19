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
        children: [
            { path:':id', component:UserDetailComponent, name:"UserDetail"}
        ]
    }
]
