import { ObjectConnection } from './ObjectConnection';
import { User } from './User';

export interface SearchUserQuery {
    search: ObjectConnection<User>
}