import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FolderCards.css";
import ApiContext from "../ApiContext";
import config from "../config";
import { getCardsForFolder } from "../card-helpers";
import { trackPromise } from 'react-promise-tracker';

export class FolderCards extends Component {
  static contextType = ApiContext;

  handleGoBack = (e) => {
    this.props.history.push("/user/:userId");
  }

  handleAddClick = () => {
    this.props.history.push(`/add-card?folderId=${this.context.selectedFolder.id}`);
  };

  handleClickDelete = (e) => {
    const folderId = this.context.selectedFolder.id;
    trackPromise(
    fetch(`${config.API_ENDPOINT}/api/folders/${folderId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
      })
      .then(() => {
        this.context.deleteFolder(folderId);
        this.props.history.push("/user/:userId");
      })
      .catch((error) => {
        console.error({ error });
      }));
  };

  render() {
    const folderId = this.context.selectedFolder.id;
    const cards = this.context.cards;
    const cardsForFolder = getCardsForFolder(cards, folderId);
    
    if (cardsForFolder.length === 0 ) {
      return (
        <>
        <h2>This Folder is Empty</h2>
        <button onClick={() => this.handleGoBack()}>Go Back</button>
        <button
            className="card-add"
            type="button"
            onClick={() => this.handleAddClick()}
          >
            Add Card
          </button>
          <button
          className="Folder__delete"
          type="button"
          onClick={() => this.handleClickDelete(this.context.selectedFolder)}
        >
          Delete Folder
        </button>
        </>
      )
    }
    
    return (
      <div>
        <h2>
          Check out your Cards from {this.context.selectedFolder.title}
        </h2>
        <ul>
          {cardsForFolder.map((card) => (
            <li key={card.id}>
              <Link to={`/card/${card.id}`}>{card.title}</Link>
            </li>
          ))}
        </ul>
        <button 
         className="go-back"
         type="button"
         onClick={() => this.handleGoBack()}>Go Back</button>
        <button
          className="Folder__delete"
          type="button"
          onClick={() => this.handleClickDelete(this.context.selectedFolder)}
        >
          Delete Folder
        </button>
        <button
            className="card-add"
            type="button"
            onClick={() => this.handleAddClick()}
          >
            Add Card
          </button>
      </div>
    );
  }
}

export default FolderCards;