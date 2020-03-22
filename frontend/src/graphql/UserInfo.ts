import { gql } from "apollo-boost";

export interface UserInfoVar {
    login: string;
}

export const USER_INFO = gql`
    query getUserInfo($login: String!) {
        user(login: $login) {
            name
            login
            avatarUrl
            bio
            company
            location
            websiteUrl
            repositories(last: 100) {
            totalCount
            totalDiskUsage
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