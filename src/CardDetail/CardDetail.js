import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fakeCards } from "../FolderCards/fakeCards";

class CardDetail extends Component {
  render() {
    const id = this.props.match.params.cardId;
    const specificCardArray = fakeCards.filter(
        (card) => card.id === parseInt(id)
      );
      if (specificCardArray.length > 0) {
        return (
          <main role="main">
            <h1>
              <Link to="/user/:id">SK9</Link>{" "}
            </h1>
            {console.log(
              "this is the specific card in the render:",
              specificCardArray[0]
            )}
            <h2 className="Card__title">Title: {specificCardArray[0].title}</h2>
            <p>{specificCardArray[0].details}</p>
            <p>Drill Type: {specificCardArray[0].drill_type}</p>
            <div className="Card__dates">
              <div className="Card__dates-modified">
                Modified <span className="Date">{specificCardArray[0].modified}</span>
              </div>
            </div>
            <button
              className="Card__delete"
              type="button"
              onClick={() => console.log("card delete clicked")}
            >
              Delete
            </button>
            <button
              className="Card__edit"
              type="button"
              onClick={() => console.log("card edit clicked")}
            >
              Edit
            </button>
            <button
              path="/add-card"
              className="Card__add"
              type="button"
              onClick={() => console.log("card add clicked")}
            >
              Add Card
            </button>
          </main>
        );
      }
      return (
        <div>
          <h1>Card not Found</h1>
        </div>
      )
    
  }
}

export default CardDetail;