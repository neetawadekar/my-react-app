import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DealList from './DealList';
import './App.css';

function App() {    
  return (
    <>
      <h2>Welcome to Deals</h2>
      <Suspense fallback={(<div>Loading...</div>)}>
        <Router>
          <Switch>
            <Route path='/' component={DealList} />            
          </Switch>
        </Router>
        </Suspense>
     </>
  );
}

export default App;
