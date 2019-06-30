import React, { Suspense } from 'react';
import { useFetch } from 'react-hooks-fetch';

// https://www.npmjs.com/package/react-hooks-fetch

const DisplayRemoteData = () => {
  const { error, data } = useFetch('http://...');
  if (error) return <span>Error:{error.message}</span>;
  if (!data) return null; // this is important
  return <span>RemoteData:{data}</span>;
};

const ReactHooksFetch = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <DisplayRemoteData />
  </Suspense>
);

export default ReactHooksFetch;