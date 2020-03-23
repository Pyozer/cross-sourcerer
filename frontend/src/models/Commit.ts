import { CommitHistoryConnection } from './CommitHistoryConnection';

export interface Commit {
    additions: number;
    history: CommitHistoryConnection
}