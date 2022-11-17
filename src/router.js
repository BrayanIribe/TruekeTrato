import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
    { path: '/', component: HomePage, name: 'Inicio', hideHeader: true, },
    { path: '/login', component: LoginPage, name: 'Login' },
    { path: '/create-post', component: CreatePostPage, name: 'Crear publicación' },
    { path: '*', component: NotFoundPage, name: '404', },
];

export default routes;