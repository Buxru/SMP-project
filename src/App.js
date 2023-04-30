import React from 'react';
import Header from "./Components/Header/header";
import Underheader from "./Components/Underheader/Underheader";
import News_feed from "./Components/News_feed/News_feed";


function App() {
  return (
    <div className="App">
      <Header/>
        <Underheader/>
        <News_feed/>
    </div>
  );
}

export default App;
