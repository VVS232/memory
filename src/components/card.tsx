import React from 'react';
import style from './card.module.css';

type props = {};
const Card: React.FunctionComponent<props> = function (props: props) {
  return (
    <div className={style.pokeCard}>
      <img
        className={style.pokeImg}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png"
        alt=""
      />
      <p className={style.pokeName}>Pokemon Name</p>
    </div>
  );
};

export default Card;
