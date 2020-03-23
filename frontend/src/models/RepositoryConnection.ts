import { ObjectConnection } from './ObjectConnection';
import { Repository } from './Repository';

export interface RepositoryConnection extends ObjectConnection<Repository> {
    totalDiskUsage: number;
}