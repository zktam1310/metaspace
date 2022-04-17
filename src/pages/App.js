import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../css/App.css';
import Landing from '../components/Landing';

function App() {

  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;
