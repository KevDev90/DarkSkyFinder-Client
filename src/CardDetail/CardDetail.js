import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { fakeCards } from "../FolderCards/fakeCards";

class CardDetail extends Component {

  handleAddClick = () => {
    this.props.history.push('/add-card')
  }

handleEditClick = () => {
    this.props.history.push('/edit-card')
  }

  render() {
    const id = this.props.match.params.cardId;
    const specificCardArray = fakeCards.filter(
        (card) => card.id === parseInt(id)
      );
    const specificCard = specificCardArray.length > 0 ? specificCardArray[0] : {}
      if (specificCardArray.length > 0) {
        return (
          <main role="main">
            <h2 className="Card__title">Title: {specificCard.title}</h2>
            <p>{specificCard.details}</p>
            <p>Drill Type: {specificCard.drill_type}</p>
            <div className="Card__dates">
              <div className="Card__dates-modified">
                Modified <span className="Date">{specificCard.modified}</span>
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
              onClick={() => this.handleEditClick()}
            >
              Edit
            </button>
            <button
              className="Card__add"
              type="button"
              onClick={() => this.handleAddClick()}
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

export default withRouter(CardDetail);