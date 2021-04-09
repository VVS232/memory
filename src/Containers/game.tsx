/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import style from './game.module.css';
import getPokemonsByIds from '../cardsLogic/cards';
import Loading from '../components/layout/loading';
import LostGame from '../components/lostGame';

type card = {
  imgLink: string;
  id: number;
  name: string;
  isClicked: boolean;
};
type props = {
  children?: React.ReactNode;
  IncreaseLevel: Function;
};

function Game(props: props) {
  const [cards, setCards] = useState<card[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState(5);
  const [isError, setError] = useState(false);
  const [isLost, setLost] = useState(false);

  useEffect(() => {
    //fetching pokemons info and making cards when number of cards updates

    setLoading(true);
    const populateCards = async () => {
      await Promise.all(getPokemonsByIds(cardNumber))
        .then((result) => {
          let pokemons = result;
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
        })
        .catch(() => {
          setError(true);
        });
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
      setLost(true);
    }
  }

  function checkWin(state: card[]) {
    let notClickedCards = state.filter((card) => card.isClicked === false);
    if (notClickedCards.length > 0) {
      return;
    } else {
      props.IncreaseLevel();
      setCardNumber(cardNumber + 3);
    }
  }
  if (isError) {
    throw new Error('');
  }

  return isLost ? (
    <LostGame />
  ) : (
    <div className={style.gameBoard}>
      {isLoading ? (
        <Loading />
      ) : cards ? (
        cards!.map((card, index) => {
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
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
