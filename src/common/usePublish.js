import React from 'react';
import http from './http';

export default function usePublish({ url }) {
  const publish = ({ variables, onError, onComplete }) => {
    return http
      .post(url, variables)
      .then((response) => response.data)
      .then((response) => onComplete(response))
      .catch((err) => onError(err))
  };

  return publish;
}
