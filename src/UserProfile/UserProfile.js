import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from "../ApiContext";
import "./UserProfile.css";


export class UserProfile extends Component {
  static contextType = ApiContext

  updateSelectedFolder = (folder) => {
    this.context.setFolder(folder);
  };

  render() {
    return (
      <main role="main">
        <h2>Check out your Folders</h2>
        <ul>
          {this.context.folders.map((folder) => {
            return (
              <li key={folder.id} className="folder-display">
                <Link
                  to={{
                    pathname: `/folder/${folder.id}`,
                    query: { title: `${folder.title}` },
                  }}
                  onClick={() => {
                    this.updateSelectedFolder(folder);
                  }}
                >
                  {folder.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
export default UserProfile;