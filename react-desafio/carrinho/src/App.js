import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Carrinho from './components/Carrinho';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Main></Main>
        <Carrinho></Carrinho>
      </div>
    </div>
  );
}

export default App;
