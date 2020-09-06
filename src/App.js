import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Recommended from './Recommended'
import  {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import SearchBar from './SearchBar';
function App() {
  return (
    <div className="app">

      <Router>
       <Header />
       <switch>
     <Route path="/search/" name="Search Page">
     <div className="app__page">
          <Sidebar />
           <SearchBar />
        </div>
     </Route>
     <Route path="/" exact name="Home">
          <div className="app__page">
          <Sidebar />
          <Recommended /> 
        </div>
     </Route>
    </switch>
      </Router>
      

    </div>
  );
}

export default App;
