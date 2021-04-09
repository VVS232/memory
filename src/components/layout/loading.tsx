import React from 'react';
import style from './loading.module.css';

function Loading() {
  return (
    <div id={style.loading}>
      <img
        id={style.loadingImg}
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Pokeball.png"
        alt=""
      />
      <p>Loading...</p>{' '}
    </div>
  );
}
export default Loading;
