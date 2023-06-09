import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Search from './pages/Search';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search" exact>
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
