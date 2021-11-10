import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthContext, AuthProvider } from './contexts/Auth';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <AuthContext.Consumer>
              {(user) =>
                user ? (
                  <Switch>
                    <Route exact path="/home">
                      <Home />
                    </Route>
                    <Route path="/">
                      <Redirect to="/home" />
                    </Route>
                  </Switch>
                ) : (
                  <Switch>
                    <Route exact path="/login">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '100vh',
                        }}
                      >
                        <Login />
                      </div>
                    </Route>
                    <Route exact path="/register">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '100vh',
                        }}
                      >
                        <Register />
                      </div>
                    </Route>
                    <Route path="/">
                      <Redirect to="/login" />
                    </Route>
                  </Switch>
                )
              }
            </AuthContext.Consumer>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </AuthProvider>
  );
};

export default App;
