import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";

export class AddFolder extends Component {
  static contextType = ApiContext
  state = {
    folderTitle: "",
    id: ""
  }
  

  handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      title: this.state.folderTitle,
      id: Date.now()
    }
    console.log(body)
    this.context.addFolder(body)
    this.props.history.push('/user/:userId')
  }
  handleChange = e => {
    this.setState({folderTitle: e.target.value})
  }
  render() {
    return (
      <div>
        <h2>Add a Folder</h2>
        <form id="new-folder" onSubmit={this.handleSubmit}>
          <section className="form-folder overview-section">
          <label htmlFor="folder-title">Folder Title</label>
          <input
            type="text"
            name="folder-title"
            placeholder="Folder Title"
            onChange={(e) => this.handleChange(e)}
            required
           />
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

export default AddFolder