import React, { FunctionComponent } from 'react'
import moment from 'moment-timezone';
import { Repository } from '../models/Repository';
import { TagGroup, Tag, Button } from 'rsuite';

type ProjectProps = {
    repo: Repository;
}

const ProjectCardStyle: React.CSSProperties = {
    border: '2px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8
}

export const Project: FunctionComponent<ProjectProps> = ({ repo }) => {
    return (
        <div className="col-xs-12" style={ProjectCardStyle}>
            <h3 style={{ marginTop: 0 }}>{repo.name}</h3>
            {repo.description && <p>{repo.description}</p>}
            {repo.languages.nodes && repo.languages.nodes.length > 0 && (
                <TagGroup style={{ paddingTop: 12 }}>
                    {repo.languages.nodes.map(({ color, name }) => (
                        <Tag style={{ backgroundColor: color ?? 'white' }}>{name}</Tag>
                        ))}
                </TagGroup>
            )}
            {repo.homepageUrl && <Button href={repo.homepageUrl} title={repo.name} appearance="ghost" style={{ marginTop: 12 }}>Homepage</Button>}

            <pre>{repo.object?.history && `${repo.object.history.totalCount} commits | `}{repo.stargazers.totalCount} stars {repo.isFork && "| FORK"} {repo.isArchived && "| ARCHIVED"}</pre>

            <div className="row" style={{ margin: 0 }}>
                <div style={{ flex: 1 }}>
                    <p>
                        Created <strong>{moment(repo.createdAt).fromNow()}</strong><br />
                        Last update <strong>{moment(repo.updatedAt).fromNow()}</strong>
                    </p>
                </div>
                <Button href={repo.url} title={repo.name} appearance="ghost">See repository</Button>
            </div>
        </div>
    )
}
