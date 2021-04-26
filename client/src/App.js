
import React, {useState} from 'react';
import Dashboard from './components/Dashboard';

import Login from './components/Login';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage("id")
  return (
    <div >
      {id ? <Dashboard id={id}/> :  <Login onIdSubmit={setId}></Login>}
     
    </div>
  );
}

export default App;
