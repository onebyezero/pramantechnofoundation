import React from 'react';
import { Route , Switch, BrowserRouter } from 'react-router-dom';
import AppTemplatePage from './AppTemplatePage';

function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={AppTemplatePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
