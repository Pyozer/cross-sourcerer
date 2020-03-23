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
            {repo.homepageUrl && <a href={repo.homepageUrl}>Homepage url</a>}
            <pre>{repo.object?.history && `${repo.object.history.totalCount} commits | `}{repo.stargazers.totalCount} stars {repo.isFork && "| FORK"} {repo.isArchived && "| ARCHIVED"}</pre>
            <ul>
                {repo.languages.nodes?.map(({ color, name }) => (
                    <li>
                        <span style={{ color: color ?? 'black', fontWeight: 'bold' }}>{name}</span>
                    </li>
                ))}
            </ul>
            <p>{repo.object?.additions} lines of code</p>
            <br />
            <small>Created: {moment(repo.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}</small>
            <br />
            <small>Last update: {moment(repo.updatedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}</small>
            <br />
            <a href={repo.url} title={repo.name}>See repository</a>
            <hr />
        </div>
    )
}
