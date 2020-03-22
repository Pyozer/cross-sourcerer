import React, { useEffect, useState } from "react";
import ApolloClient, { gql } from 'apollo-boost';
import { Project } from "./components";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
  }
});

const LOGIN_INFO = gql`
  query {
    user(login: "pyozer") {
      name
      login
      avatarUrl
      bio
      company
      location
      websiteUrl
      repositories(last: 100) {
        nodes {
          name,
          description
          forkCount
          diskUsage
          updatedAt
          stargazers {
            totalCount
          }
          object(expression: "master") {
            ...on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;

export const App = () => {
  const [userInfo, setUserInfo] = useState<any>()

  useEffect(() => {
    client.query({
      query: LOGIN_INFO,
    }).then(result => setUserInfo(result.data));
  })

  const totalOfCommits = (): number => {
    let commits: number = 0;
    userInfo.user.repositories.nodes.forEach((repo: any) => {
      commits += repo.object.history.totalCount;
    });
    return commits;
  }

  if (!userInfo) return <h1>Loading...</h1>

  return (
    <div>
      <h1>Github {userInfo.user.login} info</h1>
      <img src={userInfo.user.avatarUrl} width="100" height="100" style={{ borderRadius: 100 }} />
      <h3>{userInfo.user.bio}</h3>
      <h3>Location: {userInfo.user.location}</h3>
      <pre>
        <h1>Total of commit: {totalOfCommits()}</h1>
        <h1>Total of repo: {userInfo.user.repositories.nodes.length}</h1>
      </pre>

      {userInfo.user.repositories.nodes.map((repo: any) => {
        return <Project
          name={repo.name}
          description={repo.description}
          commits={repo.object.history.totalCount}
          stars={repo.stargazers.totalCount}
          lastUpdate={repo.updatedAt}
        />
      })}
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
    </div>
  );
};
