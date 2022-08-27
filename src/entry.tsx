import React from 'react'
import ReactDOM from 'react-dom'
import {QueryClient, QueryClientProvider} from 'react-query';

import Hello from './hello'

const client = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={client}>
        <Hello/>
    </QueryClientProvider>,
    document.body
)
