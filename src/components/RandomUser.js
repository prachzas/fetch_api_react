import React from "react";
import "../components/RandomUser.css";
export default class RandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(this.state.person);
  }

  render() {
    return (
      <body>
        <div className="person-data">
          {this.state.loading || !this.state.person ? (
            <div>loading...</div>
          ) : (
            <div>
              <div>
                {`${this.state.person.name.title}. 
                     ${this.state.person.name.first} 
                     ${this.state.person.name.last}`}
                <br />
                {`${this.state.person.email}`}
                <br />
                {`${this.state.person.phone}`}
              </div>
              <br />
              <img src={this.state.person.picture.large} alt="person" />
            </div>
          )}
        </div>
      </body>
    );
  }
}
