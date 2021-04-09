import React, { useContext } from 'react';
import style from './headerr.module.css';
import LevelContext from '../../context/levelContext';

const Headerr: React.FC = () => {
  const level = useContext(LevelContext);
  return (
    <header className={style.header}>
      <img
        src="https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png"
        alt=""
        id={style.logo}
      />
      <p className={style.headerText}>Level {level}</p>;
      <p className={style.headerText}>Remember them all</p>
    </header>
  );
};
export default Headerr;
