import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FolderCards from '../FolderCards/FolderCards'
import { fakeFolders } from '../App/fakeFolders'

export class UserProfile extends Component {
    render() {
        return (
            <main role="main">
      <header role="banner">
        <h1>Check out your Folders</h1>
      </header>
      {fakeFolders.map(folder => {
        return (
        <li key={folder.id}>
          <Link to={`/folder/${folder.id}`}>
            {folder.title}
          </Link>
        </li>)
      })}
    </main>
        )
    }
}
export default UserProfile;