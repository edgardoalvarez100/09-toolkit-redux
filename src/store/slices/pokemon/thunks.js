import { pokemonApi } from "../../../api/pokemon";
import { setPokemons, startingLoadingPokemons } from "./pokemonSlice";

export const getPokemos = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startingLoadingPokemons());
    //

    //TODO: comenzar peticion http

    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
