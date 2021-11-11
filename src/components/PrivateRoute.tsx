import React, { useContext } from 'react';
import { ConnectedComponent } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';

type InnerComponent = {
  component: ConnectedComponent<
    (props: any) => JSX.Element,
    Omit<any, 'count' | 'dispatch'>
  >;
  [key: string]: any;
};

const PrivateRoute = ({
  component: RouteComponent,
  ...rest
}: InnerComponent) => {
  const currentUser = useContext(AuthContext);
  console.log('currentUser:', currentUser);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
