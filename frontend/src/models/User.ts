import { RepositoryConnection } from './RepositoryConnection';

export interface User {
    name: string;
    login: string;
    avatarUrl: string;
    bio: string;
    company: string;
    location: string;
    websiteUrl: string;
    repositories: RepositoryConnection
}