import { User } from './User';

export interface StargazerConnection {
    nodes: User[]
    totalCount: number;
}