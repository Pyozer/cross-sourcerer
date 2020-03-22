import { Commit } from "./Commit";

export interface CommitHistoryConnection {
    totalCount: number;
    nodes?: Commit[]
}