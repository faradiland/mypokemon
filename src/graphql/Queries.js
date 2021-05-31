import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      sprites {
        front_default
        back_default
      }
      weight
      height
      species {
        name
      }
      abilities {
        ability {
          name
        }        
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
    }
  }
`;
