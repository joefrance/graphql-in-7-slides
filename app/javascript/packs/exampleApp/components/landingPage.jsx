import React from "react";

// Components
import People from "./people";
import Posts from "./posts";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>GraphQL in 7 Slides</h1>
        <p>
          Based off the video:{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=b3pwlCDy6vY&t=5s"
          >
            Open Source Lightning Talks: PostGraphQL
          </a>
        </p>
        <p>
          This app was crufted up with:
          <a
            target="_blank"
            href="https://blog.grillwork.io/create-a-ruby-on-rails-5-1-application-with-webpack-react-16-and-react-router-e2c16d267f73"
          >
            Create a Ruby on Rails 5.1 application with Webpack, React 16, and
            React Router.
          </a>
        </p>
        <p>
          And GraphQL side started with:{" "}
          <a
            target="_blank"
            href="https://www.howtographql.com/graphql-ruby/0-introduction/"
          >
            graphql-ruby Tutorial - Introduction
          </a>
        </p>
        <div>
          <People {...this.props} />
          <Posts {...this.props} />
        </div>
      </div>
    );
  }
}
export default LandingPage;
