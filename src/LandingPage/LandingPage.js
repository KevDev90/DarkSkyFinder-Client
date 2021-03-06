import React, { Component } from "react";
import LoginPage from "../LoginPage/LoginPage";
import ApiContext from "../ApiContext"
import Nasa from "../stars.jpeg"
import "./LandingPage.css"


export class LandingPage extends Component {
  static contextType = ApiContext;

  loginForm() {
    if (this.context.loggedIn === false) {
      return <LoginPage />
    }
    return null
  }

  render() {
    return (
      <div>
        <section>
        <img src={Nasa} className="nasa-image" alt="milky way image" />
          <header>
            <p>“The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in
            the interiors of collapsing stars. We are made of starstuff. ― Carl Sagan"
            </p>
          </header>
          <p>Light pollution is an unfortunate side effect of industrial civilization. Approximately 80 percent of the world’s population lives under skyglow. In the United States and Europe
          99 percent of the public can’t experience a natural night! DarkSky provides a medium for all stargazers to post and share their experiences under the night sky.
          Hopefully by sharing our stargazing experiences we can inspire others to get out of the city for a bit to take a look up at the great vastness that is the night sky.
          </p>
        </section>
        <section>
          <header>
            <h3>Record your experiences</h3>
          </header>
          <p>Observing celestial sights could connect us during a time when we're forced to be physically apart. We can have a shared collective experience and know that we're all looking up at the same night sky,
          that we're not isolated, that we're not alone after all. Even though we may be having to socially distance in our houses right now, we're actually not alone at all.
        </p>
          <p>In the DarkSky application, a user can login to their profile and create folders to help collect their thoughts and experiences while stargazing. For example, they could be broken down by
          the time of year, weather conditions, their stargazing location, who you stargazed with, or celestial events such as meteor showers or eclipses.
        </p>
          <p>Users also have the ability to add experience cards to folders. These cards include a title for reference, details about the experience, their location, and the date of their experience.
        </p>
        </section>
        <section>
          {this.loginForm()}
        </section>
      </div>
    );
  }
}

export default LandingPage;