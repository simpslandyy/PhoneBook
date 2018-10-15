import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { storeConfig } from './storeConfig';
import { rootSaga } from './saga';


let store = storeConfig();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
          <App />
          </Provider>, document.getElementById('root'));
// registerServiceWorker();
