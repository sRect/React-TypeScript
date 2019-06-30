import React, { Suspense } from 'react';
import { useFetch } from 'react-hooks-fetch';

// https://www.npmjs.com/package/react-hooks-fetch

const ReactHooksFetch = () => {
  const { error, data } = useFetch('http://...');
  if (error) return <span>Error:{error.message}</span>;
  if (!data) return null; // this is important
  return <span>RemoteData:{data}</span>;
};

// const App = () => (
//   <Suspense fallback={<span>Loading...</span>}>
//     <DisplayRemoteData />
//   </Suspense>
// );

export default ReactHooksFetch;