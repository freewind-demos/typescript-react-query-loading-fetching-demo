import React, {useState} from 'react';
import {useQuery} from 'react-query'
import fetchRemoteMessage from './fetchRemoteMessage';
import {Correct, Error as IconError} from "@icon-park/react";

function showData(data: any | undefined): React.ReactNode {
    if (data instanceof Error) {
        return data.message;
    }
    if (typeof data === 'boolean') {
        return data ? <Correct theme="outline" size="24" fill="green"/> :
            <IconError theme="outline" size="24" fill="red"/>
    }
    return JSON.stringify(data);
}

export default function Hello() {
    const [enabled, setEnabled] = useState(false);
    const [remoteSuccess, setRemoteSuccess] = useState(true)
    const fetch = useQuery(['fetchRemoteMessage', remoteSuccess], async () => fetchRemoteMessage('RemoteHello1', remoteSuccess), {
        enabled,
        retry: false
    })
    return <div>
        <div>
            <button type={'button'} onClick={() => setEnabled(v => !v)}>Enable/Disabled (current: {String(enabled)})
            </button>
            <button type={'button'} onClick={() => {
                setRemoteSuccess(true);
                fetch.refetch()
            }}>refetch (remote success)
            </button>
            <button type={'button'} onClick={() => {
                setRemoteSuccess(false);
                fetch.refetch()
            }}>refetch (remote error)
            </button>
            <button type={'button'} onClick={() => fetch.remove()}>remove</button>
        </div>
        <table>
            <thead>
            <tr>
                <th>Property</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>status</td>
                <td>{showData(fetch.status)}</td>
            </tr>

            <tr>
                <td>isLoading</td>
                <td>{showData(fetch.isLoading)}</td>
            </tr>
            <tr>
                <td>isLoadingError</td>
                <td>{showData(fetch.isLoadingError)}</td>
            </tr>
            <tr>
                <td>isSuccess</td>
                <td>{showData(fetch.isSuccess)}</td>
            </tr>
            <tr>
                <td>isFetched</td>
                <td>{showData(fetch.isFetched)}</td>
            </tr>
            <tr>
                <td>isFetchedAfterMount</td>
                <td>{showData(fetch.isFetchedAfterMount)}</td>
            </tr>
            <tr>
                <td>isFetching</td>
                <td>{showData(fetch.isFetching)}</td>
            </tr>
            <tr>
                <td>isIdle</td>
                <td>{showData(fetch.isIdle)}</td>
            </tr>
            <tr>
                <td>isPlaceholderData</td>
                <td>{showData(fetch.isPlaceholderData)}</td>
            </tr>
            <tr>
                <td>isPreviousData</td>
                <td>{showData(fetch.isPreviousData)}</td>
            </tr>
            <tr>
                <td>isRefetchError</td>
                <td>{showData(fetch.isRefetchError)}</td>
            </tr>
            <tr>
                <td>isRefetching</td>
                <td>{showData(fetch.isRefetching)}</td>
            </tr>
            <tr>
                <td>isStale</td>
                <td>{showData(fetch.isStale)}</td>
            </tr>
            <tr>
                <td>isError</td>
                <td>{showData(fetch.isError)}</td>
            </tr>
            <tr>
                <td>data</td>
                <td>{showData(fetch.data)}</td>
            </tr>
            <tr>
                <td>error</td>
                <td>{(fetch.error as Error | undefined)?.message}</td>
            </tr>
            <tr>
                <td>dataUpdatedAt</td>
                <td>{fetch.dataUpdatedAt}</td>
            </tr>
            <tr>
                <td>errorUpdatedAt</td>
                <td>{fetch.errorUpdatedAt}</td>
            </tr>
            <tr>
                <td>failureCount</td>
                <td>{fetch.failureCount}</td>
            </tr>

            </tbody>
        </table>
    </div>;
};
