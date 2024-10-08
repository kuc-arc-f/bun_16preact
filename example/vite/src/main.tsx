
import { h, Component, render } from 'preact'
import Router from 'preact-router';
//import './index.css' 
//
const Header = () => (
	<header>
		<nav>
			<a href="/">[ Home ]</a>
			<a href="/about">[ About ]</a>
			<a href="/contact">[ Contact ]</a>
		</nav>
    <hr class="my-2" />
	</header>
);
//
const pages = import.meta.glob('./client/*.tsx', { eager: true })

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/client\/(.*)\.tsx$/)[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
  }
})
console.log(routes);
//
const App = () => (
  <div class="app">
    <Router>
    {routes.map(({ path, component: RouteComp }) => {
      return (
        <RouteComp key={path} path={path}  
        ></RouteComp>
      )
    })}
    </Router>
  </div>
);
render(<App />, document.getElementById('app')!);
/*
<Component path="/about" />
*/