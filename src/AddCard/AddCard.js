import React, { Component } from "react";
import { fakeFolders } from "../App/fakeFolders";
import ApiContext from "../ApiContext";
import { fakeCards } from "../FolderCards/fakeCards";

export class AddCard extends Component {
    
  static contextType = ApiContext;

  state = {
    title: "",
    details: "",
    folderId: 1,
  };

  handleSubmit = e => {
    e.preventDefault()
    const { title, details, folderId} = this.state;
    const newCard = {
          id: Date.now(),
          title: e.target["card-title"].value,
          details: e.target["card-content"].value,
          folder_id: e.target["folder-id"].value,
          modified: new Date(),
    }
  }

  render() {
    return (
      <div>
        <header>
          <h2>Add an Experience Card</h2>
        </header>
        <form id="new-card">
          <section className="form-section overview-section">
            <label htmlFor="card-title">card Title</label>
            <input
              type="text"
              name="card-title"
              placeholder="Card Title"
              required
            />
          </section>

          <section className="form-section overview-section">
            <label htmlFor="card-folder">Card Folder</label>
            <select name="card-folder" id="card-folder">
              {fakeFolders.map((folder) => {
                return (
                  <option key={folder.id} value={folder.id} name="folder-id">
                    {folder.title}
                  </option>
                );
              })}
            </select>
          </section>

          <section className="form-section overview-section">
            <label htmlFor="card-content">Card content</label>
            <textarea name="card-content" rows="15" required></textarea>
          </section>

          {/* <section className="form-section card-type-section">
            <h2>Select weather type</h2>
            <input
              type="radio"
              name="weather-type"
              id="weather-type-spring"
              value="0"
              className="weather-type-radio"
            />
            <label htmlFor="weather-type-spring">
              <span>Spring</span>
            </label>

            <input
              type="radio"
              name="weather-type"
              id="weather-type-summer"
              value="1"
              className="weather-type-radio"
            />
            <label htmlFor="weather-type-summer">
              <span>Summer</span>
            </label>

            <input
              type="radio"
              name="weather-type"
              id="weather-type-fall"
              value="2"
              className="weather-type-radio"
            />
            <label htmlFor="weather-type-fall">
              <span>Fall</span>
            </label>

            <input
              type="radio"
              name="weather-type"
              id="weather-type-winter"
              value="3"
              className="weather-type-radio"
            />
            <label htmlFor="weather-type-winter">
              <span>Winter</span>
            </label>

          </section> */}
          <section className="button-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </div>
      );
    }
}

export default AddCard