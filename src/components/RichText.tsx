import React from 'react';
import queryString from 'query-string';
import parse, { Element } from 'html-react-parser';

interface Props {
  html?: string;
}

function RichText({ html }: Props): JSX.Element {
  if (html == null) {
    return <></>;
  }
  const replaceEmbed = parse(html, {
    replace: domNode => {
      if (domNode instanceof Element && domNode.attribs?.class === 'embedly-card') {
        const videoUrl = domNode.attribs.href;
        const videoId = queryString.parseUrl(videoUrl).query.v;
        const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
        return (
          <iframe
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
