import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { GET_POKEMON_LIST } from "../graphql/Queries";
import Button from "../components/Button";
import Card from "../components/Card";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import StyledPokemonList from "./StyledPokemonList";
import pokeball from "../assets/pokeball.png";

const PokemonList = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  const { loading, data } = useQuery(GET_POKEMON_LIST, {
    variables: {
      limit,
      offset: 0,
    },
  });

  function goToDetail(name) {
    history.push(`pokemon/${name}`);
  }

  function getOwned(name) {
    let inventory = localStorage.getItem("pokemon");
    if (inventory) {
      let owned = 0;
      inventory = JSON.parse(inventory);
      // eslint-disable-next-line
      inventory.map((inv) => {
        if (inv.name === name) {
          owned = owned + 1;
        }
      });
      return owned;
    } else return 0;
  }

  useEffect(() => {
    data && setPokemons(data.pokemons.results);
  }, [data]);

  return (
    <>
      {pokemons.length !== 0 ? (
        <StyledPokemonList>
          <PageTitle title='Pick a Pokemon!' />
          <div className='grid'>
            {pokemons.map((pokemon) => (
              <Card
                pokemonlist
                id={'pokemon-list'}
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                image={pokemon.image ? pokemon.image : pokeball}
                goToDetail={goToDetail}
                getOwned={getOwned}
              />
            ))}
          </div>
          {!loading && (
            <div className='loader'>
              <Button onClick={() => setLimit(limit + 10)} className="btn-load">Click to load more</Button>
            </div>
          )}
        </StyledPokemonList>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PokemonList;
