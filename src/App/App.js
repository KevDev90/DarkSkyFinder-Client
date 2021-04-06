import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import config from "../config";
import ApiContext from "../ApiContext";
import AddFolder from "../AddFolder/AddFolder";
import AddCard from "../AddCard/AddCard";
import NavMain from "../NavMain/NavMain";
import UserProfile from "../UserProfile/UserProfile";
import LandingPage from "../LandingPage/LandingPage";
import CardDetail from "../CardDetail/CardDetail";
import FolderCards from "../FolderCards/FolderCards";
import "./App.css";


class App extends Component {
  state = {
    cards: [],
    folders: [],
    selectedFolder: {
      id: null,
      title: "",
    },
    loggedIn: false,
  };

  setFolder = (selectedFolder) => {
    this.setState({ selectedFolder });
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/cards`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }),
      fetch(`${config.API_ENDPOINT}/folders`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }),
    ])
      .then(([cardsRes, foldersRes]) => {
        if (!cardsRes.ok)
          return cardsRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));

        return Promise.all([cardsRes.json(), foldersRes.json()]);
      })
      .then(([cards, folders]) => {
        this.setState({ cards, folders });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleAddFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder],
    });
  };

  handleAddCard = (card) => {
    this.setState({
      cards: [...this.state.cards, card],
    });
  };

  handleDeleteCard = (cardId) => {
    this.setState({
      cards: this.state.cards.filter(
        (card) => card.id !== parseInt(cardId)
      ),
    });
  };

  handleDeleteFolder = (folderId) => {
    this.setState({
      folders: this.state.folders.filter((folder) => folder.id !== folderId),
    });
  };

  handleLogin = () => {
    this.setState({
      loggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      loggedIn: false,
    });
  };

  renderMainRoutes() {
    if (this.state.loggedIn === false) {
      return ["/", "/landing"].map((path) => (
        <Route exact key={path} path={path} component={LandingPage} />
      ));
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
      selectedFolder: this.state.selectedFolder,
      loggedIn: this.state.loggedIn,
      setFolder: this.setFolder,
      login: this.handleLogin,
      logout: this.handleLogout,
      addFolder: this.handleAddFolder,
      addCard: this.handleAddCard,
      deleteCard: this.handleDeleteCard,
      deleteFolder: this.handleDeleteFolder,
    };
    if (this.state.loggedIn === false) {
      return (
        <ApiContext.Provider value={value}>
          <div className="App">
            <nav className="App_nav">
              <NavMain />
            </nav>
            <header className="App_header">
              <h1>
                <Link to="/landing">DarkSky</Link>{" "}
              </h1>
              <h2>A Logbook of All Things Celestial!</h2>
            </header>
            <main className="App_main">
              <LandingPage />
            </main>
            <footer className="content-info">Built by Kevin Johnson</footer>
          </div>
        </ApiContext.Provider>
      );
    }
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <nav className="App_nav">
            <NavMain />
          </nav>
          <header className="App_header">
            <h1>
              <Link to="/landing">DarkSky</Link>{" "}
            </h1>
            <h2>A Logbook of All Things Celestial!</h2>
          </header>
          <main className="App_main">{this.renderMainRoutes()}</main>
          <footer className="content-info">Built by Kevin Johnson</footer>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;

