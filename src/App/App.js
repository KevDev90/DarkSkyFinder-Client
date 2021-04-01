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
import config from "../config";
import './App.css';
import { fakeFolders } from "./fakeFolders";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      folders: [],
      loggedIn: false,
    };
  }

// componentDidMount() {
//   Promise.all(
//     fetch(`${config.API_ENDPOINT}/folders`, {
//       method: 'GET',
//       headers: {
//       'content-type': 'application/json',
//       //'Authorization': `Bearer ${config.API_KEY}`
//     }
//   })
// )
//     .then((foldersRes) => {
//       if (!foldersRes.ok)
//         return foldersRes.json().then((e) => Promise.reject(e));

//         return Promise.all(foldersRes.json());
//       })
//       .then((folders) => {
//         this.setState(folders);
//       })
//       .catch((error) => {
//         console.error({ error });
//       });
//   }

  // componentDidMount() {
  //   this.setState({
  //     folders: fakeFolders,
  //   })
  //   console.log(this.state.folders)
  // }


  handleAddFolder = (folder) => {
    console.log(this.state.folders)
    console.log(folder)
    this.setState({
      folders: [...this.state.folders, folder],
    });
  }

  handleAddCard = (card) => {
    console.log("test")
    console.log(card)
    this.setState({
      cards: [...this.state.cards, card],
    });
  }

  handleDeleteCard = (cardId) => {
    this.setState({
      cards: this.state.cards.filter(
        (card) => card.id !== cardId
      ),
    });
  }

  handleDeleteFolder(folderId) {
    this.setState({
      folders: this.state.folders.filter((folder) => folder.id !== folderId),
    });
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
       addFolder: this.handleAddFolder,
       deleteCard: this.handleDeleteCard,
       deleteFolder: this.handleDeleteFolder,
    };
    return (
      <ApiContext.Provider value={value}>
      {console.log(value)}
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

