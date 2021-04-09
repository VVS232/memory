import { pokemon } from '../interfaces/pokemonsInterface';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

function getRandomNumbers(range: number): number[] {
  let newArr: number[] = [];
  let randomNumber: number;
  for (let i = 0; i < range; i++) {
    do {
      randomNumber = Math.floor(Math.random() * 898);
    } while (newArr.includes(randomNumber));
    newArr.push(randomNumber);
  }
  return newArr;
}
function getPokemonsByIds(range: number) {
  let ids = getRandomNumbers(range);
  let pokemons = ids.map(async (el) => {
    let response: pokemon = await P.getPokemonByName(el);
    let pokemon = {
      id: response.id,
      imgLink: response.sprites.other['official-artwork'].front_default,
      name: response.name,
    };
    return pokemon;
  });
  return pokemons;
}

export default getPokemonsByIds;
