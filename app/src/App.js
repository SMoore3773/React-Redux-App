import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
import Slip from './components/slip';
import Header from './components/header';
import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Header/>
        <section>
          <Slip />
        </section>
      </div>
    </Provider>
  );
}

export default App;
