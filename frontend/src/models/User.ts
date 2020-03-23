import { OrganizationConnection } from './OrganizationConnection';
import { RepositoryConnection } from './RepositoryConnection';
import { FollowConnection } from './FollowConnection';

export interface User {
    avatarUrl: string;
    bio: string;
    company: string;
    followers: FollowConnection;
    following: FollowConnection;
    location: string;
    login: string;
    name: string;
    organizations: OrganizationConnection;
    repositories: RepositoryConnection;
    websiteUrl: string;
}