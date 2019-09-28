import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [content, setContent] = useState('');

  return (
    <div className="App">
      <Header changeContent={setContent} />
      <Main content={content} />
      <Footer />
    </div>
  );
};

export default App;
