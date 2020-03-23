import React, { FunctionComponent } from 'react'
import { User } from '../models/User'

type UserAvatarProps = {
    user: User;
    size: number;
}

export const UserAvatar: FunctionComponent<UserAvatarProps> = ({ user, size }) => (
    <img
        src={user.avatarUrl}
        alt={user.login}
        width={size}
        height={size}
        className="center-xs"
        style={{ borderRadius: 100 }}
    />
)
