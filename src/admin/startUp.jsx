import React from 'react';
import { Provider } from 'react-redux';
import { adminStore } from './redux/adminStore';
import App from './App';

function AdminApp(){
 return (
<Provider store={adminStore}>
    <App />
  </Provider>
 );
}

export default AdminApp;
