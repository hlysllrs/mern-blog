import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Blog,
		key: 'Blog',
		path: '/blog'
	}
];

export default routes;
