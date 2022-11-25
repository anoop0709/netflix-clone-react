
import './App.css';
import React from "react";
import Banner from './Componenets/Banner/Banner';
import NavBar from './Componenets/NavBar/NavBar';
import RowPost from './Componenets/RowPost/RowPost';
import {orginals,actions, comedy, horror, romance} from './url'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost title='Netflix Orginals' url={orginals} />
     <RowPost title='Actions' isSmall url ={actions}/>
     <RowPost title='Comedy'  url ={comedy}/>
     <RowPost title='Horror' isSmall url ={horror}/>
     <RowPost title='Romance' isSmall url ={romance}/>
    </div>
  );
}

export default App;
