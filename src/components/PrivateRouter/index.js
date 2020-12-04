import { Route, Redirect } from 'react-router-dom';

import isAuthenticated from '../../auth';

function PrivateRouter ({ component: Component, ...rest }){
   
        <Route
            {...rest}
            render={props => (
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: '/login', state: { from: props.location } }}></Redirect> 
            )
        )} />
    
}

export default PrivateRouter;