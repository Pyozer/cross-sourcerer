import React, { useEffect, useState } from "react";
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
  }
});

const LOGIN_INFO = gql`
  query {
    user(login: "makiboto") {
      name
      avatarUrl
      bio
      company
      location
      websiteUrl
      repositories(last: 15) {
        nodes {
          name,
          description
          owner {
            login,
            avatarUrl
          }
        }
      }
    }
  }
`;

export const App = () => {
  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    client.query({
      query: LOGIN_INFO,
    }).then(result => setUserInfo(result.data));
  })

  return (
    <div>
      <h1>Github Pyozer info</h1>
      <pre>
        {userInfo ? JSON.stringify(userInfo, null, 2) : 'Loading'}
      </pre>
    </div>
  );
};
