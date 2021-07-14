
import React, {useState} from 'react';
import Dashboard from './components/Dashboard';

import Login from './components/Login';
import { ContactsProvider } from './contexts/ContactsProvider';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage("id")
  const dashboard = (
    <ContactsProvider>
<Dashboard id={id}/>
    </ContactsProvider>
  )
  return (
    <div >
      {id ?  dashboard : <Login onIdSubmit={setId}></Login>}
     
    </div>
  );
}

export default App;
