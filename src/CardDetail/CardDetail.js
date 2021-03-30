import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { fakeCards } from "../FolderCards/fakeCards";

class CardDetail extends Component {
  render() {
    const id = this.props.match.params.cardId;
    const specificCard = fakeCards.filter((card) => {
      if (card.id === parseInt(id)) {
        return card
      }
    });
    return (
      <main role="main">
        {console.log("this is the specific card in the render:", specificCard)}
        <h2 className="Card__title">Title: {specificCard[0].title}</h2>
        <p>{specificCard[0].details}</p>
        <p>Drill Type: {specificCard[0].drill_type}</p>
        <div className="Card__dates">
          <div className="Card__dates-modified">
            Modified <span className="Date">{specificCard[0].modified}</span>
          </div>
        </div>
        <button
          className="Card__delete"
          type="button"
          onClick={console.log("card delete clicked")}
        >
          Delete
        </button>
      </main>
    );
  }
}

export default CardDetail;