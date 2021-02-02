import React from 'react';

import parse from 'html-react-parser';
import { parseUrl } from 'query-string';
interface Props {
  html?: string;
}

function RichText({ html }: Props): JSX.Element {
  if (html == null) {
    return <></>;
  }
  const replaceEmbed = parse(html, {
    replace: domNode => {
      if ('attribs' in domNode && domNode.attribs?.class === 'embedly-card') {
        const videoUrl = domNode.attribs.href;
        const videoId = parseUrl(videoUrl).query.v;
        if (typeof videoId !== 'string') {
          return domNode;
        }
        const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
        return (
          <iframe
            title={`YouTube embed`}
            width="560"
            height="315"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      }
    },
  });

  return <div>{replaceEmbed}</div>;
}

export default RichText;
