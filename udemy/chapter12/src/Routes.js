import HomeComponent from './components/HomeComponent';
// import UserComponent from './components/UserComponent';
import UserDetailComponent from './components/UserDetailComponent';

const UserComponent = resolve => {
    require.ensure(['./components/UserComponent.vue'], () => {
        resolve(require('./components/UserComponent.vue'))
    });
}

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
    },
    {
        path:'/usuarios',
        redirect:'/users'
    },
    {
        path:'*',
        redirect:'/'
    }
]
