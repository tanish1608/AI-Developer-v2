import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './page/s';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
return (
<BrowserRouter>
<Header />
<Switch>
<Route path="/about" component={AboutPage} exact />
<Route path="/contact" component={ContactPage} exact />
{/ Add other routes here /}
</Switch>
</BrowserRouter>
);
};

export default App;