import { Repository } from './Repository';

export interface RepositoryConnection {
    nodes: Repository[]
    totalCount: number;
    totalDiskUsage: number;
}