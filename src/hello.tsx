import React from 'react';
import {useAsync} from 'react-async-hook';
import fetchRemoteMessage from './fetchRemoteMessage';

export default function Hello() {
  const result = useAsync(fetchRemoteMessage, ['RemoteHello1'])
  return <div>
    {result?.loading && <div>Loading...</div>}
    {result?.error && <div>Error: {result?.error?.message}</div>}
    {result?.result !== undefined && <div>Hello, {result?.result}</div>}
  </div>;
};
