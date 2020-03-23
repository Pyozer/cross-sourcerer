import React, { FunctionComponent } from 'react'
import { AutoComplete, Loader } from 'rsuite'
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_USER, SearchUserVar } from '../graphql/SearchUser';
import { SearchUserQuery } from '../models/SearchUserQuery';
import { SearchResult } from '../components/SearchResult';
import { Centered } from '../components/Centered';

const WAIT_INTERVAL = 1000
let timerID: NodeJS.Timeout;

export const Home: FunctionComponent = () => {
    const history = useHistory();
    const [searchUser, { data, loading }] = useLazyQuery<SearchUserQuery, SearchUserVar>(SEARCH_USER)

    const getUsers = (): any[] => {
        return data?.search?.nodes?.map((user) => ({
            value: <SearchResult user={user} />,
            label: user.login
        })) ?? [];
    }

    const handleSearch = (query: string): void => {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
            searchUser({ variables: { query } })
        }, WAIT_INTERVAL)
    }

    return <Centered>
        <div className="col-xs-10 col-sm-8 col-md-6 col-lg-4">
            <h1>Welcome !</h1>
            <br />
            <AutoComplete
                onChange={handleSearch}
                placeholder="Search github's user..."
                data={getUsers()}
                renderItem={({ value }) => value}
                onSelect={({ label }) => history.push(`/${label}`)}
            />
            <Loader size="md" style={{ visibility: loading ? 'visible' : 'hidden' }} />
        </div>
    </Centered>
}
