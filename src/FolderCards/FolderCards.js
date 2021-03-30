import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardDetail from '../CardDetail/CardDetail'
import { fakeCards } from './fakeCards'

export class FolderCards extends Component {
    render() {
        return (
            <div>
                <ul>
          {fakeCards.map(card =>
            <li key={card.id}>
                <Link to={`/card/${card.id}`} render={(rprops) => <CardDetail {...rprops}/>}>
            {card.title}
          </Link>
              {/* <CardDetail
                id={card.id}
                title={card.title}
                details={card.details}
              /> */}
            </li>
          )}
        </ul>
            </div>
        )
    }
}

export default FolderCards