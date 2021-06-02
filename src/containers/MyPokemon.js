import { useEffect, useState } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Result from "../components/Result";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";
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
      {pokemons.length !== 0 ? (
        <StyledPokemonList>
          <PageTitle title='My Pokemon' />
          <div className='grid'>
            {pokemons.map((pokemon) => (
              <Card
                id='my-pokemon'
                key={pokemon.nickname}
                name={pokemon.nickname}
                spec={pokemon.species.name}
                image={pokemon.sprites.front_default}
                onClickRelease={onClickRelease}
              />
            ))}
          </div>
          { screen === "confirmation" &&
            <Modal visible={true} title="Are you sure?" onClose={() => setScreen("detail")}>
              <Result>
                <p>Do you want ro remove <b style={{ textTransform: 'capitalize' }}>{nickname}</b></p>
                <p>from your Pokemon list?</p>
                <br />
                <div className="btn-wrapper">
                  <Button confirmation onClick={() => handleRelease(nickname)} className="yes-btn">Yes</Button>
                  <Button confirmation onClick={() => setScreen("default")} className="no-btn">No</Button>
                </div>
              </Result>
            </Modal>
          }
        </StyledPokemonList>
      ) : (
        <Result className="centered">
          <p>Seems like you haven't caught any Pokemon yet</p>
          <br/>
          <h3>Pick and catch Pokemon first</h3>
        </Result>
      )}
    </>
  );
};

export default MyPokemon;
