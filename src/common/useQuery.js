import React from 'react';
import { AppContext } from './appReducer';
import http from './http';

export default function useQuery({ url }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [state, dispatch] = React.useContext(AppContext);

  React.useEffect(() => {
    const fetch = () => {
      setLoading(true);

      return http
        .get(url)
        .then((response) => response.data)
        .then((payload) => {
          // Cache server response in state
          // in our scenario we need to map
          // circle vendor ids with all vendors
          // in order to resolve vendor names
          // this caching level could be simply
          // avoided if server returns the required
          // data for UI rendering
          dispatch({ type: 'QUERY_CACHE', payload });

          return payload;
        })
        .then((payload) => setData(payload))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };

    fetch();
  }, [dispatch, url]);

  return [error, loading, data];
}
