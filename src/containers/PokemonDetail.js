import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../graphql/Queries";

import StyledPokemonDetail from "./StyledPokemonDetail";
import Loader from "../components/Loader";
import Title from "../components/Title";
import Detail from "../components/Detail";
import Result from "../components/Result";
import Button from "../components/Button";
import Input from "../components/Input";
import HpProgress from "../components/Hp";
import Modal from "../components/Modal";

import pokeball from "../assets/pokeball.png";
import flip from "../assets/rotate.svg";

const PokemonDetail = () => {
  let { name } = useParams();
  const history = useHistory();
  const [pokemon, setPokemon] = useState(undefined);
  const [front, setFront] = useState(true)
  const [screen, setScreen] = useState("detail");
  const [pokename, setPokename] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState("About")

  const { data } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name,
    },
  });

  const catchPokemon = () => {
    let result = Math.random() < 0.5;
    if (result) setScreen("success");
    else setScreen("fail");
  }

  const removeDashes = (string) => {
    return string.replace(/-/g, " ");
  }

  const getLocalStore = () => {
    let local = localStorage.getItem("pokemon");
    if (local) {
      return JSON.parse(localStorage.getItem("pokemon"));
    } else {
      return [];
    }
  }

  const storeData = (inventory, catched) => {
    inventory.push(catched);
    localStorage.setItem("pokemon", JSON.stringify(inventory));
    setPokename("");
    history.push("/inventory");
  }

  const savePokemon = (value) => {
    let inventory = getLocalStore();
    let catched;

    if (pokename !== "") {
      catched = {
        ...value,
        nickname: pokename,
      };
    } else {
      setError("empty");
      setScreen("error");
      return;
    }

    if (inventory.length > 0) {
      let isDuplicate = false;
      // eslint-disable-next-line
      inventory.map((inv) => {
        if (pokename.toUpperCase() === inv.nickname.toUpperCase()) {
          isDuplicate = true;
        }
      });
      if (!isDuplicate) {
        storeData(inventory, catched);
      } else {
        setError("duplicate");
        setScreen("error");
        setPokename("");
      }
    } else {
      storeData(inventory, catched);
    }
  }

  const flipImg = () => {
    setFront(!front)
  }

  const changeTab = (tab) => {
    setTab(tab);
  }

  useEffect(() => {
    data && setPokemon(data.pokemon);
  }, [data]);

  let tabsItem = ['About', 'Base Stats', 'Moves']

  return (
    <>
      {pokemon ? (
        <StyledPokemonDetail>
          <div className='flex-container'>
            <div className='avatar'>
              <Title primary>{pokemon.name}</Title>
              <div title='types'>
                <Detail>
                  {pokemon.types &&
                    pokemon.types.map((types) => {
                      const { type } = types;
                      return (
                        <div className='card type' key={type.name}>{type.name}</div>
                      );
                    })}
                </Detail>
              </div>
              <div className="preview">
                <div className='image-container'>
                  {front === true ?
                    <img
                      className='pokemon-image'
                      src={pokemon.sprites.front_default ? pokemon.sprites.front_default : pokeball}
                      alt='pokemon'
                    />
                    :
                    <img
                      className='pokemon-image'
                      src={pokemon.sprites.back_default ? pokemon.sprites.back_default : pokeball}
                      alt='pokemon'
                    />
                  }
                  <Button onClick={() => flipImg()} className='flip-btn'>
                    <img src={flip} className='flip' alt="flip button" title="Flip Pokemon" />
                  </Button>
                </div>
                <Button onClick={() => catchPokemon()} className='catch-btn' catch>
                  <img src={pokeball} className='pokeball' alt="pokeball" />
                  <p className='title'>Catch!</p>
                </Button>
              </div>
            </div>
            <div className='info'>
              <div className='tabs'>
                {tabsItem.map(item =>
                  <div className={item === tab ? 'tab active' : 'tab'} onClick={() => changeTab(item)}>{item}</div>
                )}
              </div>
              {tab === tabsItem[0] &&
                <div title='About'>
                  <div className='flex'>
                    <div>
                      <p className='info-title'>Species</p>
                      <p className='info-desc'>{pokemon.species.name}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <p className='info-title'>Weight</p>
                      <p className='info-desc'>{pokemon.weight} kg</p>
                    </div>
                    <div>
                      <p className='info-title'>Height</p>
                      <p className='info-desc'>{pokemon.height} cm</p>
                    </div>
                  </div>
                  <div title='abilities'>
                    <p className='info-title'>Abilities</p>
                    <Detail>
                      {pokemon.abilities &&
                        pokemon.abilities.map((abilities) => {
                          const { ability } = abilities;
                          return (
                            <div className='card' key={ability.name}>{removeDashes(ability.name)}</div>
                          );
                        })}
                    </Detail>
                  </div>
                </div>
              }
              {tab === tabsItem[2] &&
                <div title='moves'>
                  <p className='info-title'>Moves</p>
                  <Detail>
                    {pokemon.moves &&
                      pokemon.moves.map((moves) => {
                        const { move } = moves;
                        return (
                          <div className='card' key={move.name}>{removeDashes(move.name)}</div>
                        );
                      })}
                  </Detail>
                </div>
              }
              {tab === tabsItem[1] &&
                <div title='Base Stats'>
                  {pokemon.stats &&
                    pokemon.stats.map((stats) => {
                      const { stat } = stats;
                      return (
                        <table className='stat-item' key={stat.name}>
                          <tr>
                            <td>
                              <span className='stat-name info-title'>{removeDashes(stat.name)}</span>
                            </td>
                            <td>
                              <span className='stat-value info-desc'>{stats.base_stat}</span>
                            </td>
                            <td>
                              <HpProgress value={stats.base_stat} width='100%' />
                            </td>
                          </tr>
                        </table>
                      );
                    })}
                </div>
              }
              {screen === "success" &&
                <Modal visible={true} title="You did it!" onClose={() => setScreen("detail")}>
                  <Result>
                    <p>You just catched <b style={{ textTransform: 'capitalize' }}>{pokemon.name}</b>!</p>
                    <p>Now give a nickname and save it as your Pokemon</p>
                    <br />
                    <Input handleChange={setPokename} placeholder="Nickname" />
                    <Button onClick={() => savePokemon(pokemon)} className='save-btn'>Save</Button>
                  </Result>
                </Modal>
              }
              {screen === "fail" &&
                <Modal visible={true} title="Oh, no :(" onClose={() => setScreen("detail")}>
                  <Result>
                    <p>You failed to catch pokemon.</p>
                    <p><b style={{ textTransform: 'capitalize' }}>{pokemon.name}</b> has ran away</p>
                    <br />
                    <Button onClick={() => setScreen("detail")} className='save-btn'>Try again</Button>
                  </Result>
                </Modal>
              }
              {screen === "error" &&
                <Modal visible={true} title="Oh, no :(" onClose={() => setScreen("detail")}>
                  <Result>
                    <p>
                      {error === "empty"
                        ? <span>Your pokemon doesn't have a name.<br /><b>Give your pokemon a name now</b></span>
                        : <span>The name you give to your pokemon <b>already exist</b>!<br />Try to give another name</span>}
                    </p>
                    <br />
                    <Button onClick={() => setScreen("success")} className='save-btn'>Give name</Button>

                  </Result>
                </Modal>
              }
            </div>
          </div>
        </StyledPokemonDetail>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PokemonDetail;
