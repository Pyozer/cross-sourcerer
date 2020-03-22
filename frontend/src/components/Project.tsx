import React from 'react'
import moment from 'moment-timezone';

type ProjectProps = {
    name: string;
    description: string;
    commits: number;
    stars: number;
    lastUpdate: string;
}

export const Project = (props: ProjectProps) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h5>{props.description}</h5>
            <pre>{props.commits} commits | {props.stars} stars</pre>
            <small>Last update: {moment(props.lastUpdate).format('dddd, MMMM Do YYYY, hh:mm:ss')}</small>
            <hr />
        </div>
    )
}
