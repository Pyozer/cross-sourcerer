import { Commit } from './Commit';
import { StargazerConnection } from "./StargazerConnection";

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
    stargazers: StargazerConnection,
    updatedAt: string;
}