import { Commit } from './Commit';
import { StargazerConnection } from "./StargazerConnection";
import { Language } from './Language';

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
    primaryLanguage: Language;
    stargazers: StargazerConnection,
    updatedAt: string;
    url: string;
}