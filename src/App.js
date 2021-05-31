// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/Settings";

import MyPokemon from "./containers/MyPokemon";
import PokemonDetail from "./containers/PokemonDetail";
import PokemonList from "./containers/PokemonList";
import NotFound from "./containers/404";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path='/' component={PokemonList} />
            <Route exact path='/pokemon/:name' component={PokemonDetail} />
            <Route exact path='/inventory' component={MyPokemon} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
