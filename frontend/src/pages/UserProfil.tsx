import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { Project } from "../components";
import { UserInfoQuery } from "../models/UserInfoQuery";
import { USER_INFO, UserInfoVar } from "../graphql/UserInfo";
import { useParams } from "react-router-dom";

export const UserProfil = () => {
    const { username } = useParams()
    const { loading, error, data } = useQuery<UserInfoQuery, UserInfoVar>(USER_INFO, {
        variables: { login: username! }
    });

    const totalOfCommits = (): number => {
        let commits: number = 0;
        data!.user.repositories.nodes?.forEach((repo) => {
            commits += repo.object?.history?.totalCount ?? 0;
        });
        return commits;
    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <>
        <h1>Error...</h1>
        <pre>{error.graphQLErrors.map((err) => <p>{err.message}</p>)}</pre>
    </>
    if (!data) return <h3>No data :/</h3>

    return (
        <div>
            <h1>Github {data.user.login} ({data.user.name}) info</h1>
            <img src={data.user.avatarUrl} width="100" height="100" alt={data.user.login} style={{ borderRadius: 100 }} />
            <h3>{data.user.bio}</h3>
            <h3>Location: {data.user.location}</h3>
            <pre>
                <h1>Total of commit: {totalOfCommits()}</h1>
                <h1>Total of repo: {data.user.repositories.totalCount}</h1>
                <h1>Total of disk usage: {data.user.repositories.totalDiskUsage}</h1>
                <h1>Total of followers: {data.user.followers.totalCount}</h1>
                <h1>Total of following: {data.user.following.totalCount}</h1>
                <h1>Belongs to {data.user.organizations.totalCount} organization</h1>
                <ul>
                    {data.user.organizations.nodes?.map((org) => <li>{org.name}</li>)}
                </ul>
            </pre>

            {data.user.repositories.nodes?.map((repo) => <Project repo={repo} />)}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};
