import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import moment from "moment-timezone";
import { useQuery } from '@apollo/react-hooks';
import { Icon, Loader, Avatar } from 'rsuite';
import { Project } from "../components";
import { UserInfoQuery } from "../models/UserInfoQuery";
import { USER_INFO, UserInfoVar } from "../graphql/UserInfo";
import { UserAvatar } from "../components/UserAvatar";
import { UserInfoCard } from "../components/UserInfoCard";
import { Centered } from "../components/Centered";

export const UserProfil: FunctionComponent = () => {
    const { username } = useParams()
    const { loading, error, data } = useQuery<UserInfoQuery, UserInfoVar>(USER_INFO, {
        variables: { login: username! }
    });

    const totalOfCommits = (): number => {
        let commits = 0;
        data!.user.repositories.nodes?.forEach((repo) => {
            commits += repo.object?.history?.totalCount ?? 0;
        });
        return commits;
    }

    if (loading) return (
        <Centered>
            <h1>Loading <Loader size="md" /></h1>
        </Centered>
    )

    if (error) return (
        <Centered>
            <h1>Error...</h1>
            <pre>{error.graphQLErrors.map((err) => <p>{err.message}</p>)}</pre>
        </Centered>
    )
    if (!data) return (
        <Centered>
            <h3>No data :/</h3>
        </Centered>
    )

    return (
        <div className="row" style={{ margin: '50px 0' }}>
            <div className="col-xs-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                <div className="center-xs">
                    <UserAvatar user={data.user} size={150} />
                    <h1>{data.user.login}</h1>
                    <h3>{data.user.bio}</h3>
                    <div className="center-xs middle-xs">
                        {data.user.location && (
                            <>
                                <Icon icon='location-arrow' style={{ marginRight: 8 }} />
                                {data.user.location}
                                <span style={{ marginLeft: 16, marginRight: 16 }}>|</span>
                            </>
                        )}
                        Registered {moment(data.user.createdAt).fromNow()}
                    </div>
                </div>
                <div className="row" style={{ marginTop: 16 }}>
                    <UserInfoCard title="Commits" value={totalOfCommits()} />
                    <UserInfoCard title="Repositories" value={data.user.repositories.totalCount} />
                    <UserInfoCard title="Disk usage (KB)" value={data.user.repositories.totalDiskUsage} />
                    <UserInfoCard title="Followers" value={data.user.followers.totalCount} />
                    <UserInfoCard title="Following" value={data.user.following.totalCount} />
                </div>
                {data.user.organizations.totalCount > 0 && (
                    <>
                        <h2>{data.user.organizations.totalCount} organization(s)</h2>
                        <br />
                        {data.user.organizations.nodes?.map((org) => (
                            <>
                                <h5>
                                    <Avatar src={org.avatarUrl} style={{ verticalAlign: 'middle', marginRight: 12 }} />
                                    {org.name}
                                </h5>
                                <br />
                            </>
                        ))}
                    </>
                )}

                <h2 style={{ marginBottom: 12 }}>Repositories</h2>
                <div className="row">
                    {data.user.repositories.nodes?.map((repo) => <Project repo={repo} />)}
                </div>
            </div>
        </div>
    );
};
