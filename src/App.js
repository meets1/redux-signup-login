import React from 'react'
import { Provider } from 'react-redux';
import './App.css';
import Signup from './components/signup';
import store from './store';
import mainpage from './components/mainpage';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import ProtectedRoute from './components/auth';
import errorPage from './components/errorPage';

// import {useDispatch, useSelector} from 'react-redux';

function App() {
  // const myState = useSelector((state)=>state.counter);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Signup} />
            <ProtectedRoute exact path='/welcome' component={mainpage} />
            <Route path="*" component={errorPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
