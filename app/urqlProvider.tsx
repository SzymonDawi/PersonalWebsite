'use client';

import { FC, ReactNode } from 'react';
import { createClient, Provider, cacheExchange, fetchExchange } from 'urql';

const urqlclient = createClient({
  url: 'http://127.0.0.1:8000/api/graphql/',
  exchanges: [cacheExchange, fetchExchange],
});

type Props = {
  children: ReactNode;
}

const UrqlProvider: FC<Props> = ({ children }) => (
  <Provider value={urqlclient}>{children}</Provider>
);


export default UrqlProvider;