import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'
import Principal from './pages/Principal'
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Questions from './pages/Questions';
import PublicRoute from './routes/PublicRoute'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {

  const [isAuthenticated, setIsAuthenticated] = React.useState(sessionStorage.getItem('token')? true : false);

  return (
    <>
      <BrowserRouter>
        <Navigation isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Switch>
          {/*Rutas públicas*/}
          <PublicRoute exact={true} path="/">
            <Principal/>
          </PublicRoute>
          <PublicRoute exact={true} path="/SignIn">
            <SignIn setIsAuthenticated={setIsAuthenticated} />
          </PublicRoute>
          <PublicRoute exact={true} path="/SignUp">
            <SignUp/>
          </PublicRoute>
          {/*Rutas Privadas*/}
          <ProtectedRoute exact={true} path="/Dashboard">
            <Dashboard/>
          </ProtectedRoute>   
          <ProtectedRoute exact={true} path="/Questions/:idSubject">
            <Questions/>
          </ProtectedRoute>   
          {/* Not found 404 page */}
          <PublicRoute exact={true} path="*">
              <NotFound/>
          </PublicRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
