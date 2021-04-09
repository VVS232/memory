export interface pokemon {
  abilities: Array<any>;
  base_experience: Number;
  forms: Array<object>;

  id: number;
  name: string;
  order: number;
  species: object;
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
}
