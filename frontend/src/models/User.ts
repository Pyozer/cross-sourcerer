import { Organization } from './Organization';
import { ObjectConnection } from './ObjectConnection';
import { RepositoryConnection } from './RepositoryConnection';

export interface User {
    avatarUrl: string;
    bio: string;
    company: string;
    createdAt: string;
    followers: ObjectConnection<User>;
    following: ObjectConnection<User>;
    location: string;
    login: string;
    name: string;
    organizations: ObjectConnection<Organization>;
    repositories: RepositoryConnection;
    websiteUrl: string;
}