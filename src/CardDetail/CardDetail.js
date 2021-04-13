import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";
import { trackPromise } from 'react-promise-tracker';
import "./CardDetail.css";

class CardDetail extends Component {
  static contextType = ApiContext

  handleAddClick = () => {
    this.props.history.push('/add-card')
  }

  handleClickDelete = (e) => {
    const cardId = this.props.match.params.cardId;
    trackPromise(
    fetch(`${config.API_ENDPOINT}/api/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
      })
      .then(() => {
        this.context.deleteCard(cardId);
        this.props.history.push("/user/:userId");
      })
      .catch((error) => {
        console.error({ error });
      }));
  };

  render() {
    const id = this.props.match.params.cardId;
    const specificCardArray = this.context.cards.filter(
      (card) => card.id === parseInt(id)
    );
    const specificCard =
      specificCardArray.length > 0 ? specificCardArray[0] : {};
    const dateString = specificCard.modified;
    const modifiedDate = new Date(dateString);
    const formattedDate = modifiedDate.toString();

    if (specificCardArray.length > 0) {
      return (
        <div>
          <section className="details">
            <h2 className="Card__title">{specificCard.title}</h2>
            <p>{specificCard.details}</p>
            <h4>Modified:</h4> <span className="Date">{formattedDate}</span>
            <section className="buttons">
              <button
                className="card-delete"
                type="button"
                onClick={() => this.handleClickDelete(specificCard)}
              >
                Delete Card
              </button>
              <button
                className="card-add"
                type="button"
                onClick={() => this.handleAddClick()}
              >
                Add Card
              </button>
            </section>
          </section>
        </div>
      );
    }
    return (
      <div>
        <h1>Card not Found</h1>
      </div>
    );
  }
  
}

export default withRouter(CardDetail);