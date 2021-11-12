import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Products from './views/Products/Products'
import ProductDetails from './views/Products/ProductDetails'
import AddProduct from './views/Products/AddProduct'
import EditProduct from './views/Products/EditProduct'
import Notes from './views/Notes'
import Cart from './views/Cart'
import Quiz from './views/Quiz'
import Job from './views/Job/Job'
import Rehistro from './views/Job/Rehistro'
import Dashboard from './views/Job/Dashboard'

// router.beforeEach((to, from, next) => {
// 	if(to.matched.some(record => record.meta.requiresAuth)) {
// 	  if (store.getters.isLoggedIn) {
// 		next()
// 		return
// 	  }
// 	  next('/login')
// 	} else {
// 	  next()
// 	}
//   })

  

export default {
	mode: 'history',
    routes: [
		{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
		{
            path: '/register',
            name: 'Register',
            component: Register
        },
		{
            path: '/product',
            name: 'Products',
            component: Products,
        },

		{
            path: '/product/:create',
            name: 'AddProduct',
            component: AddProduct,
        },
		{
            path: '/product/:id',
            name: 'ProductDetails',
            component: ProductDetails,
        },
		{
            path: '/notes',
            name: 'Notes',
            component: Notes,
        },
		{
            path: '/cart',
            name: 'Cart',
            component: Cart,
        },
		{
            path: '/quiz',
            name: 'Quiz',
            component: Quiz,
        },

		{
            path: '/job',
            name: 'Job',
            component: Job,
        },
		{
            path: '/rehistro',
            name: 'Rehistro',
            component: Rehistro,
        },

		{
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        },

		{ path: '*', redirect: '/' }
    ],
}