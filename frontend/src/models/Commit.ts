import { ObjectConnection } from './ObjectConnection';

export interface Commit {
    additions: number;
    history: ObjectConnection<Commit>
}