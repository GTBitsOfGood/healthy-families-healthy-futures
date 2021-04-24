/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';

import jsonp from 'jsonp';
import { stringify } from 'query-string';

export enum Status {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

export function useMailChimp(url: string) {
  const [status, setStatus] = React.useState(Status.IDLE);
  const [error, setError] = React.useState<Error | string | null>(null);
  const [value, setValue] = React.useState(null);

  const subscribe = React.useCallback(
    data => {
      const params = stringify(data);
      const ajaxURL = url.replace('/post?', '/post-json?');
      const newUrl = ajaxURL + '&' + params;

      setError(null);
      setStatus(Status.LOADING);

      jsonp(newUrl, { param: 'c' }, (err, data) => {
        if (err) {
          setStatus(Status.ERROR);
          setError(err);
        } else if (data.result !== 'success') {
          setStatus(Status.ERROR);
          setError(data.msg);
        } else {
          setStatus(Status.SUCCESS);
          setValue(data.msg);
        }
      });
    },
    [url],
  );

  return { subscribe, status, error, value };
}
