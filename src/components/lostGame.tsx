/* eslint-disable no-restricted-globals */
import React from 'react';
import style from './lostGame.module.css';

function LostGame() {
  return (
    <div id={style.lost}>
      <p>Oh no, you've lost. Try again?</p>
      <img
        src="https://www.jing.fm/clipimg/full/213-2135753_pokemon-clipart-sad-sad-tepig.png"
        alt=""
      />
      <button onClick={() => location.reload()}>Restart</button>
    </div>
  );
}

export default LostGame;
