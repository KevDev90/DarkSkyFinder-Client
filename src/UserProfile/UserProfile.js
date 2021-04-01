import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fakeFolders } from '../App/fakeFolders'
import ApiContext from "../ApiContext";


export class UserProfile extends Component {
  static contextType = ApiContext
render() {
  return (
    <main role="main">
    <h1>
      <Link to="/user/:id">DarkSky</Link>{" "}
    </h1>
    <header role="banner">
      <h2>Check out your Folders</h2>
    </header>
    {this.context.folders.map((folder) => {
          return (
            <li key={folder.id}>
            <Link to={{
                pathname: `/folder/${folder.id}`, 
                query:{title: `${folder.title}`}
              }}>{folder.title}</Link>
              {/* <Link to={`/folder/${folder.id}`}>{folder.title}</Link> */}
            </li>
          );
        })}
      </main>
    );
  }
}
export default UserProfile;