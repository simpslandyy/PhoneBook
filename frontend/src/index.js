import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
import  Phonebook  from './containers/Phonebook.container';
import registerServiceWorker from './utils/registerServiceWorker';

import { Provider } from 'react-redux';
import { storeConfig } from './utils/storeConfig';
import rootSaga from './containers/Phonebook.saga';


let store = storeConfig();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
          <Phonebook />
          </Provider>, document.getElementById('root'));
// registerServiceWorker();
