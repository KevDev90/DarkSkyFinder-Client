import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardDetail from '../CardDetail/CardDetail'
import { fakeCards } from './fakeCards'

export class FolderCards extends Component {
    render() {
        return (
          <div>
            <h1>
              <Link to="/user/:id">DarkSky</Link>{" "}
            </h1>
            <ul>
              {fakeCards.map((card) => (
                <li key={card.id}>
                <Link
                to={`/card/${card.id}`}
                render={(rprops) => <CardDetail {...rprops} />}
              >
                {card.title}
              </Link>
            </li>
            ))}
            </ul>
            </div>
    );
  }
}
export default FolderCards