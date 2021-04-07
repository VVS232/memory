import React from 'react';
import Headerr from './layout/headerr';
import getCardById from '../cardsLogic/cards';
import Game from '../Containers/game';

function App() {
  getCardById();
  return (
    <div className="App">
      <Headerr />
      <Game></Game>
    </div>
  );
}

export default App;
