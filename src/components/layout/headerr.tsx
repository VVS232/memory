import React, { useContext } from 'react';
import style from './headerr.module.css';
import LevelContext from '../../context/levelContext';

const Headerr: React.FC = () => {
  const level = useContext(LevelContext);
  return (
    <header className={style.header}>
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
        alt=""
        id={style.logo}
      />
      <p className={style.headerText}>Level {level}</p>;
      <p className={style.headerText}>Remember them all</p>
    </header>
  );
};
export default Headerr;
