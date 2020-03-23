import { User } from "./User";

export interface FollowConnection {
    totalCount: number;
    nodes?: User[]
}