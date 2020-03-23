import React, { FunctionComponent } from 'react'
import { User } from '../models/User'
import { Avatar } from 'rsuite'

type SearchResultProps = {
    user: User;
}

export const SearchResult: FunctionComponent<SearchResultProps> = ({ user }) => (
    <div>
        <Avatar circle src={user.avatarUrl} style={{ verticalAlign: 'middle', marginRight: 16 }} />
        <strong>{user.login}</strong>
    </div>
)