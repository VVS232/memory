const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

async function getCardById() {
  let res: Pokemon = await P.getPokemonByName(306);
  console.log(res.sprites.other['official-artwork'].front_default);
}

export default getCardById;

type Pokemon = {
  abilities: Array<any>;
  base_experience: Number;
  forms: Array<object>;

  id: Number;
  name: String;
  order: Number;
  species: Object;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
      };
      front_default: string;
      front_female: string;
      'official-artwork': {
        front_default: string;
      };
    };
  };
};
