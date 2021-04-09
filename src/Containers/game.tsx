/* eslint-disable no-restricted-globals */
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
  const [cardNumber, setCardNumber] = useState(2);

  useEffect(() => {
    setLoading(true);
    const populateCards = async () => {
      let pokemons = await Promise.all(getPokemonsByIds(cardNumber));
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
  }, [cardNumber]);

  function clickHandler(index: number) {
    if (cards![index].isClicked === false) {
      setCards((oldState) => {
        let newState = [...oldState!];
        newState[index].isClicked = true;
        newState = shuffle(newState);
        checkWin(newState!);

        return newState;
      });
    } else {
      alert('You lost');
      location.reload();
    }
  }
  function checkWin(state: card[]) {
    let notClickedCards = state.filter((card) => card.isClicked === false);
    if (notClickedCards.length > 0) {
      return;
    } else {
      setCardNumber(cardNumber + 5);
    }
  }
  return (
    <div className={style.gameBoard}>
      {isLoading ? (
        <p>Loading...</p>
      ) : cards ? (
        cards.map((card, index) => {
          return (
            <Card
              key={index}
              imgSrc={card.imgLink}
              id={card.id}
              name={card.name}
              clickHandler={() => clickHandler(index)}
            />
          );
        })
      ) : null}
    </div>
  );
}

export default Game;

function shuffle(array: any[]) {
  let newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
