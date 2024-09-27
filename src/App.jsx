import { useState } from "react";
// React router Imports
import { Route, Routes } from "react-router-dom";

// Custom Component Imports
import PokemonList from "./components/PokemonList";
import NavBar from "./components/NavBar.jsx";
import PokemonDetails from "./components/PokemonDetails.jsx";
import PokemonForm from "./components/PokemonForm.jsx";

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

  function addPokemon(formContents) {
    formContents._id = pokemon.length + 1;
    setPokemon([...pokemon, formContents]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route
          path="/pokemon/new"
          element={<PokemonForm addPokemon={addPokemon} />}
        />
        <Route path="*" element={<h2>Sorry, couldn't find Pokemon</h2>} />
      </Routes>
    </>
  );
};

export default App;

