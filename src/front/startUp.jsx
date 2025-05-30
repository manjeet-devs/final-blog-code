import React from 'react';
import { Provider } from 'react-redux';
import { frontStore } from './redux/frontStore';
import App from './App';

function FrontApp(){
 return (
<Provider store={frontStore}>
    <App />
  </Provider>
 );
}
  

export default FrontApp;
