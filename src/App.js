// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search'
import React from 'react';


function App() {
  return (
    <div className="body">
      <div className="page1">
          <Header/>
       <div className="searchbox">
          <Search />
       </div>  
      </div>
    </div>
  );
}

export default App;
