import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Forgot from './pages/Forgot';

import PrivateRouter from './components/PrivateRouter';

function Routes(){
    return(
        <>
          <BrowserRouter>
             <Route path="/" component={Home} exact />
             <Route path="/login" component={Login} exact />
             <Route path="/register" component={Register} exact />
             <Route path="/forgot" component={Forgot} exact />
             <Route path="/notfound" component={NotFound} exact />
          </BrowserRouter>
        </>
    )
}

export default Routes;