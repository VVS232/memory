import React, { Component } from 'react';
import Card from '../components/card';
import Wrap from '../hoc/wrap';
import style from './game.module.css';

class Game extends Component<{}, {}> {
  render() {
    return (
      <div className={style.gameBoard}>
        <Card /> <Card /> <Card /> <Card /> <Card />
      </div>
    );
  }
}

export default Game;
