import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fakeCards } from "../FolderCards/fakeCards";
import { fakeFolders } from "../App/fakeFolders";
import ApiContext from "../ApiContext";

export class AddCard extends Component {
    
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const newCard = {
          title: e.target["card-title"].value,
          details: e.target["card-content"].value,
          folder_id: e.target["folder-id"].value,
          modified: new Date(), 
    }
  }

//   fetch(`${fakeCards}`, {
//     // .then(res => {
//     //   if (!res.ok)
//     //     return res.json().then(e => Promise.reject(e))
//     //   return res.json()
//     // })
//   })
//     .then(newCard => {
//       fakeCards.push(newCard)
//     })
//     .catch(error => {
//       console.error({ error })
//     })
  

  render() {
    return (
      <div>
        <h1>
          <Link to="/user/:id">DarkSky</Link>{" "}
        </h1>
        <header>
          <h1>Add an Experience Card</h1>
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

          <section className="form-section card-type-section">
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

          </section>
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