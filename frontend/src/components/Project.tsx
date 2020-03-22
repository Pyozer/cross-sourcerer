import React from 'react'
import moment from 'moment-timezone';
import { Repository } from '../models/Repository';

type ProjectProps = {
    repo: Repository;
}

export const Project = ({ repo }: ProjectProps) => {
    return (
        <div>
            <h3>{repo.name}</h3>
            <h5>{repo.description}</h5>
            <pre>{repo.object?.history?.totalCount} commits | {repo.stargazers.totalCount} stars</pre>
            <small>Last update: {moment(repo.updatedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}</small>
            <hr />
        </div>
    )
}
