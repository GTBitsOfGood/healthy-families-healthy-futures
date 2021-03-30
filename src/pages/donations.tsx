import React from 'react';

import { Container, Heading } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';

interface Props extends PageProps {
  data: GatsbyTypes.DonationQueryQuery;
}

function DonationIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title || '';
  return (
    <Layout location={props.location}>
      <Container alignItems="center">
        <Helmet title={`Donations | ${siteTitle}`} />
        <Heading as="h1" size="3xl">
          Donations
        </Heading>
      </Container>
    </Layout>
  );
}

export default DonationIndex;

export const pageQuery = graphql`
  query DonationQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
