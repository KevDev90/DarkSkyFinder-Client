import React, { Component } from "react";
// import { fakeFolders } from "../App/fakeFolders";
import ApiContext from "../ApiContext";
// import { fakeCards } from "../FolderCards/fakeCards";

export class AddCard extends Component {

    static contextType = ApiContext;

    state = {
        title: "",
        details: "",
        folderId: 1,
    };

    handleSubmit = e => {
        e.preventDefault()
        // const { title, details, folderId, id } = this.state;
        const newCard = {
            id: Date.now(),
            title: this.state.title,
            details: this.state.details,
            folderId: this.state.folderId,
        }
        console.log(newCard)
        this.context.addCard(newCard)
        this.props.history.push(`/card/${newCard.id}`)
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.name)
        console.log(e.target.value, e.target.name)
        // this.setState({
        //     ...this.state,
        //     title: e.target["card-title"].value,
        //     details: e.target["details"].value,
        //     folder_id: e.target["folder-id"].value,
        // })
    }
    componentDidMount() {
        // const test = this.context
        // console.log(this.context)
    }

    render() {
        return (
            <div>
                <header>
                    <h2>Add an Experience Card</h2>
                </header>
                <form id="new-card" onSubmit={this.handleSubmit}>
                    <section className="form-section overview-section">
                        <label htmlFor="title">card Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Card Title"
                            required
                            onChange={this.handleChange}
                        />
                    </section>

                    <section className="form-section overview-section">
                        <label htmlFor="folderId">Card Folder</label>
                        <select onChange={this.handleChange} name="folderId" id="folderId">
                            {this.context.folders.map((folder) => {
                                
                                return (
                                    <option key={folder.id} value={folder.id} name="folderId">
                                        {folder.title}
                                    </option>
                                );
                            })}
                        </select>
                    </section>

                    <section className="form-section overview-section">
                        <label htmlFor="details">Card content</label>
                        <textarea onChange={this.handleChange} name="details" rows="15" required></textarea>
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