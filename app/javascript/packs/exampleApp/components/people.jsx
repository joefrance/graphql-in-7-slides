import React from "react";
const axios = require("axios");

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 1,
      people: []
    };

    console.log(`constructor`);
    //this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios({
      url: "http://localhost:3000/graphql",
      method: "post",
      data: {
        query: `
          query allPeople {
            allPeople {
              id
              fullName
            }
          }
        `
      }
    }).then(result => {
      this.setState({ people: result.data.data.allPeople });
      console.log(result.data.data.allPeople);
      console.log(this.state.people);
    });

    console.log("People did mount.");
  }

  render() {
    return (
      <div>
        <h1>People</h1>
        <ul>
          {this.state.people.map(p => {
            return <li>{p.fullName}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default People;
