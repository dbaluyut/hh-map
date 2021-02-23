import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Map from './features/map/Map';
import './App.css';
import Sidebar from './features/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      
    <Sidebar />
    <Map />
    </div>
  );
}

export default App;   
