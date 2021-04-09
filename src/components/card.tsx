import React, { ReactNode } from 'react';
import style from './card.module.css';

type props = {
  name: string;
  id: number;
  imgSrc: string;
  children?: ReactNode;
};
function Card(props: props) {
  return (
    <div className={style.pokeCard}>
      <img className={style.pokeImg} src={props.imgSrc} alt="" />
      <p className={style.pokeName}>
        #{props.id} {props.name}
      </p>
    </div>
  );
}

export default Card;
