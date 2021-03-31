import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import AddFolder from "../AddFolder/AddFolder";
import AddCard from "../AddCard/AddCard";
import NavMain from "../NavMain/NavMain";
import UserProfile from "../UserProfile/UserProfile";
import LandingPage from "../LandingPage/LandingPage";
import CardDetail from "../CardDetail/CardDetail";
import FolderCards from "../FolderCards/FolderCards"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      folders: [],
      loggedIn: true,
    };
  }

  componentDidMount() {

  }

  handleAddCard = (card) => {
    this.setState({
      cards: [...this.state.cards, card],
    });
  }

  handleDeleteCard = () => {

  }

  handleLogin = () => {
    this.setState({
      loggedIn: true
    })
  }

  renderMainRoutes() {
    if (this.state.loggedIn === false) {
      return (
        ["/", "/landing"].map((path) => (
          <Route exact key={path} path={path} component={LandingPage} />
        ))
      )
    }
    return (
      <>
        {["/", "/landing"].map((path) => (
          <Route exact key={path} path={path} component={LandingPage} />
        ))}
        <Route path="/user/:userId" component={UserProfile} />
        <Route exact path="/folder/:folderId" component={FolderCards} />
        <Route path="/card/:cardId" component={CardDetail} />
        <Route path="/add-folder" component={AddFolder} />
        <Route path="/add-card" component={AddCard} />
      </>
    );
  }

  render() {
    const value = {
       cards: this.state.cards,
       folders: this.state.folders,
       loggedIn: this.state.loggedIn,
       login: this.handleLogin,
       addCard: this.handleAddCard,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <nav className="App_nav">
            <NavMain/>
          </nav>
          <header className="App_header">
            <h1>
            <Link to="/landing">DarkSky</Link>{" "}
            </h1>
            <h2>A Logbook of All Things Celestial!</h2>
          </header>
          <main className="App_main">{this.renderMainRoutes()}</main>
          <footer className="content-info">Footer</footer>
        </div>
      </ApiContext.Provider>
    );
  }

}

export default App;

