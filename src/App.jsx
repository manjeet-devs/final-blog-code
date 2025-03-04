import React from "react";
import FrontApp from "./front/App";
import AdminApp from "./admin/App";
import { frontStore } from './front/redux/frontStore';
import { adminStore } from './admin/redux/adminStore';
import { Provider } from 'react-redux';

function App(){
  const pathname = window.location.pathname;
  
  if(pathname.startsWith('/admin')){
    return (
      <Provider store={adminStore}>
        <AdminApp />
      </Provider>
    
    );
  }
  return (
    <Provider store={frontStore}>
      <FrontApp />
    </Provider>
  )
}

export default App;