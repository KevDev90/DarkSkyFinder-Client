import React, { Component } from 'react'

export class AddCard extends Component {
    render() {
        return (
            <div>
            <header>
              <h1>Add an Experience Card!</h1>
            </header>
              <form id="new-card">

                <section className="form-section overview-section">
                  <label htmlFor="card-title">Card Title</label>
                  <input type="text" name="card-title" placeholder="Card Title" required />
                </section>

                <section className="form-section overview-section">
                  <label htmlFor="card-summary">Experience summary</label>
                  <textarea name="card-summary" rows="15" required></textarea>
                </section>

                <section className="button-section">
                  <button type="submit">Submit</button>
                </section>
              </form>
          </div>
        )
    }
}

export default AddCard