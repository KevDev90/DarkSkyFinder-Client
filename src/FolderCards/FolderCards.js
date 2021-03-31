import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardDetail from '../CardDetail/CardDetail'
import { fakeCards } from './fakeCards'
import "./FolderCards.css";

export class FolderCards extends Component {
    render() {
        return (
          <div>
            <h2>Check out your Cards from {this.props.location.query.title}</h2>
            <ul className="card-list">
              {fakeCards.map((card) => (
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