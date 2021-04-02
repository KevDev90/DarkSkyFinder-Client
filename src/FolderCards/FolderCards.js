import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import CardDetail from '../CardDetail/CardDetail'
// import { fakeCards } from './fakeCards'
import "./FolderCards.css";
import ApiContext from "../ApiContext";



export class FolderCards extends Component {
  static contextType = ApiContext
    render() {
        return (
          <div>
            <h2>Check out your Cards from {this.props.location.query.title}</h2>
            <ul className="card-list">
              {this.context.cards.map((card) => (
                <li key={card.id}>
                  <Link to={`/card/${card.id}`}>{card.title}</Link>
            </li>
            ))}
            </ul>
            </div>
    );
  }
}
export default FolderCards