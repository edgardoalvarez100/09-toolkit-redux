import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startingLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { startingLoadingPokemons, setPokemons } = pokemonSlice.actions;
