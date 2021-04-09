import React, { useState } from 'react';
import Headerr from './layout/headerr';
import Game from '../Containers/game';
import LevelContext from '../context/levelContext';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary';

function App() {
  const [level, setSevel] = useState(1);

  return (
    <LevelContext.Provider value={level}>
      <div className="App">
        <Headerr />
        <ErrorBoundary>
          <Game
            IncreaseLevel={() => {
              setSevel(level + 1);
            }}
          ></Game>
        </ErrorBoundary>
      </div>
    </LevelContext.Provider>
  );
}

export default App;
