import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import User from './pages/User';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search" exact>
                <User />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
