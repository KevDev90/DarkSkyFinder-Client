import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import { trackPromise } from 'react-promise-tracker';

import "./AddCard.css";

export class AddCard extends Component {
  static contextType = ApiContext;

  state = {
    title: "",
    details: "",
    folderId: new URLSearchParams(this.props.location.search).get("folderId")
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, details, folderId } = this.state;
    const newCard = {
      title,
      details,
      folder_id: folderId,
      modified: new Date(),
    };
    trackPromise(
    fetch(`${config.API_ENDPOINT}/api/cards`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((newCard) => {
        this.context.addCard(newCard);
        this.props.history.push(`/user/:userId`);
      })
      .catch((error) => {
        console.error({ error });
      }));
  };

  handleRadioButton = (favorited) => {
    this.setState({ favorited });
  };

  componentDidMount () {
    this.setState({folderId: this.context.folders[0].id})
  }

  render() {
    const getFolders = this.context.folders;
    return (
      <div>
        <h2>Add a Card</h2>
        <form id="new-card" onSubmit={this.handleSubmit}>
          <section className="form-section overview-section">
            <label htmlFor="card-title" className="card-title">
              Card Title
            </label>
            <br />
            <input
              type="text"
              name="card-title"
              placeholder="card Title"
              required
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </section>

          <section className="form-section overview-section">
            <label htmlFor="card-folder" className="card-folder">
              Card Folder
            </label>
            <br />
            <select id="selectId"
              name="card-folder"
              id="card-folder"
              value={new URLSearchParams(this.props.location.search).get("folderId")}
              onChange={(e) => this.setState({ folderId: e.target.value })}
            >
              {getFolders.map((folder) => {
                return (
                  <option key={folder.id} value={folder.id} name="folder-id">
                    {folder.title}
                  </option>
                );
              })}
            </select>
          </section>

          <section className="form-section overview-section">
            <label htmlFor="card-content" className="card-content">
              card content
            </label>
            <br />
            <textarea
              value={this.state.details}
              name="card-content"
              id="card-details-box"
              rows="5"
              onChange={(e) => this.setState({ details: e.target.value })}
              required
            ></textarea>
          </section>

          <section className="button-section">
            <button type="submit">Submit</button>
          </section>
        </form>
      </div>
    );
  }
}

export default AddCard;