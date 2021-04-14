import { createClient } from 'contentful';

const contentfulConfig = {
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
};

const { space, accessToken } = contentfulConfig;

if (space.length === 0 || accessToken.length === 0) {
  throw new Error('Contentful space and access token need to be provided.');
}

const client = createClient(contentfulConfig);

export default client;
