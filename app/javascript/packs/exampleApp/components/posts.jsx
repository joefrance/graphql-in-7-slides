import React from "react";
const axios = require("axios");

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 1,
      posts: []
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
          query allPosts {
            allPosts {
              id
              author_id
              headline
              body
              bodyWithHeadline
              author {
                fullName
              }
            }
          }
        `
      }
    }).then(result => {
      this.setState({ posts: result.data.data.allPosts });
      //console.log(result.data.data.allPosts);
      console.log(this.state.posts);
    });

    console.log("Posts did mount.");
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map(p => {
            return (
              <li key={p.id}>
                {p.body} <b>by: {p.author.fullName}</b>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Post;
