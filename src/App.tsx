import React, { useState } from 'react';
import './App.css';


import Header from './components/pages/core/Header';
import { Top } from './components/pages/top/Top';
import { Footer } from './components/pages/core/footer/Footer';

function App() {

  const [page, setPage] = useState("");

  return (
    <div className="App">
      <Header setPage={setPage}/>
      {/* <main> */}
      <Top page={page}/>
      {/* </main> */}

      {/* <footer> */}
      <Footer />
      {/* </footer> */}
    </div>
  );
}

export default App;
