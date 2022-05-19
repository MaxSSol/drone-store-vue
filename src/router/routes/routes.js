import HomeView from "@/views/HomeView";
import ProductView from "@/views/ProductView";
import ProductsView from "@/views/ProductsView";
import FavoritesView from "@/views/FavoritesView";
import CartView from "@/views/CartView";
import CategoriesView from "@/views/CategoriesView";
import CategoryProductsVies from "@/views/CategoryProductsVies";

export default  [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsView
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductView,
        props: true
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView
    },
    {
        path: '/categories',
        name: 'categories',
        component: CategoriesView
    },
    {
        path: '/products/category/:id',
        name: 'products-category',
        component: CategoryProductsVies
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: FavoritesView
    }

]