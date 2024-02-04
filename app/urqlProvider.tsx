'use client';

import { FC, ReactNode } from 'react';
import { createClient, Provider, cacheExchange, fetchExchange } from 'urql';
import { backend_url } from './constants';

const urqlclient = createClient({
  url: backend_url + '/api/graphql/',
  exchanges: [cacheExchange, fetchExchange],
});

type Props = {
  children: ReactNode;
}

const UrqlProvider: FC<Props> = ({ children }) => (
  <Provider value={urqlclient}>{children}</Provider>
);


export default UrqlProvider;