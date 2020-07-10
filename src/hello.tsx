import React from 'react';
import {useQuery} from 'react-query'
import fetchRemoteMessage from './fetchRemoteMessage';

export default function Hello() {
  const {isLoading, error, data} = useQuery('fetchRemoteMessage', () => fetchRemoteMessage('RemoteHello1'), {
    retry: false
  })
  return <div>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error: {error?.message}</div>}
    {data !== undefined && <div>Hello, {data}</div>}
  </div>;
};
