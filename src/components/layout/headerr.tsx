import React from 'react';
import style from './headerr.module.css';

const Headerr: React.FC = () => {
  return (
    <header className={style.header}>
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
        alt=""
        id={style.logo}
      />
      <p className={style.headerText}>Remember them all</p>
    </header>
  );
};
export default Headerr;
