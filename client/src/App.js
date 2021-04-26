
import React, {useState} from 'react';

import Login from './components/Login';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage()
  return (
    <div >
      {id}
      <Login onIdSubmit={setId}></Login>
    </div>
  );
}

export default App;
