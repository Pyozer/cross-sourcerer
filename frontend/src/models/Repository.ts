import { Language } from './Language';
import { User } from './User';
import { Commit } from './Commit';
import { ObjectConnection } from './ObjectConnection';

export interface Repository {
    createdAt: string;
    description?: string;
    diskUsage?: number;
    forkCount: number;
    homepageUrl?: string;
    isArchived: boolean;
    isFork: boolean;
    name: string;
    object?: Commit;
    languages: ObjectConnection<Language>;
    stargazers: ObjectConnection<User>;
    updatedAt: string;
    url: string;
}