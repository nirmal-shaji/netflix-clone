
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import {action, comedy, documentries, horror, originals, romance} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={documentries} title='Documentries' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
    </div>
  );
}

export default App;
