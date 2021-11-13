import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';

type Props = {
  component: React.ComponentType<any>;
  [key: string]: any;
};

const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  ...rest
}: Props) => {
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
