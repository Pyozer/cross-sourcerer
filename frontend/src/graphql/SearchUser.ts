import { gql } from 'apollo-boost';

export interface SearchUserVar {
    query: string;
}

export const SEARCH_USER = gql`
    query searchUser($query: String!) {
        search(query: $query, first: 10, type: USER) {
            nodes {
                ...on User {
                    name
                    login
                    avatarUrl
                }
            }
        }
    }
`

