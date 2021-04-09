import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import style from './game.module.css';
import getPokemonsByIds from '../cardsLogic/cards';

type card = {
  imgLink: string;
  id: number;
  name: string;
  isClicked: boolean;
};
function Game() {
  const [cards, setCards] = useState<card[] | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const populateCards = async () => {
      let pokemons = await Promise.all(getPokemonsByIds(7));
      let cardsState: card[] = pokemons.map((pokemon) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          imgLink: pokemon.imgLink,
          isClicked: false,
        };
      });
      setCards(cardsState);
      setLoading(false);
    };
    populateCards();
  }, []);

  return (
    <div className={style.gameBoard}>
      {isLoading ? (
        <p>Loading...</p>
      ) : cards ? (
        cards.map((card) => {
          return <Card imgSrc={card.imgLink} id={card.id} name={card.name} />;
        })
      ) : null}
    </div>
  );
}

export default Game;
