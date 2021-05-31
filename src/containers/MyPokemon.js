import { useEffect, useState } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Result from "../components/Result";
import PageTitle from "../components/PageTitle";
import StyledPokemonList from "./StyledPokemonList";

const MyPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nickname, setNickName] = useState();
  const [screen, setScreen] = useState("default");

  function onClickRelease(data) {
    setScreen("confirmation");
    setNickName(data);
  }

  function handleRelease(name) {
    let inventory = JSON.parse(localStorage.getItem("pokemon"));
    let result = inventory.filter((inv) => inv.nickname !== name);
    localStorage.setItem("pokemon", JSON.stringify(result));
    window.location.reload(true);
  }

  useEffect(() => {
    localStorage.getItem("pokemon")
      ? setPokemons(JSON.parse(localStorage.getItem("pokemon")))
      : setPokemons([]);
  }, []);

  return (
    <>
      {screen === "confirmation" ? (
        <Result>
          <p>{`Are you sure you want to release ${nickname} ?`}</p>
          <br />
          <Button confirmation onClick={() => handleRelease(nickname)}>
            Yes
          </Button>
          <Button confirmation onClick={() => setScreen("default")}>
            No
          </Button>
        </Result>
      ) : pokemons.length !== 0 ? (
        <StyledPokemonList>
          <PageTitle title='My Pokemon' />
          <div className='grid'>
            {pokemons.map((pokemon) => (
              <Card
                id='my-pokemon'
                key={pokemon.nickname}
                name={pokemon.nickname}
                image={pokemon.sprites.front_default}
                onClickRelease={onClickRelease}
              />
            ))}
          </div>
        </StyledPokemonList>
      ) : (
        <Result>
          <p>{`You have no pokemon.`}</p>
        </Result>
      )}
    </>
  );
};

export default MyPokemon;
