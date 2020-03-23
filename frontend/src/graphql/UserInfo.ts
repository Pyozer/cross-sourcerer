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
            createdAt
            location
            websiteUrl
            following {
                totalCount
            }
            followers {
                totalCount
            }
            organizations(first: 100) {
                totalCount
                nodes {
                    avatarUrl
                    description
                    login
                    name
                }
            }
            repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}, ownerAffiliations: [OWNER]) {
                totalCount
                totalDiskUsage
                nodes {
                    createdAt
                    description
                    diskUsage
                    forkCount
                    homepageUrl
                    isArchived
                    isFork
                    languages(first: 20, orderBy: {field: SIZE, direction: DESC}) {
                        totalCount
                        nodes {
                            name
                            color
                        }
                    }
                    name
                    object(expression: "master") {
                        ...on Commit {
                            additions
                            history {
                                totalCount
                            }
                        }
                    }
                    stargazers {
                        totalCount
                    }
                    updatedAt
                    url
                }
            }
        }
    }
`;