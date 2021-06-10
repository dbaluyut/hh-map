import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Map from './features/map/Map';
import './App.css';
import Sidebar from './features/sidebar/Sidebar';
import venues from "./db.json"

function App() {
  console.log(venues)
  return (
    <div className="app">
      
    <Sidebar />
    <Map />
    </div>
  );
}

export default App;   
