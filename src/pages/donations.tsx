import React from 'react';

import { Container, Heading } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import Layout from 'src/components/Layout';

interface Props extends PageProps {
  data: GatsbyTypes.DonationPageQuery;
}

function DonationIndex(props: Props): JSX.Element {
  return (
    <Layout data={props.data}>
      <Container alignItems="center">
        <Heading as="h1" size="3xl">
          Donations
        </Heading>
      </Container>
    </Layout>
  );
}

export default DonationIndex;

export const pageQuery = graphql`
  query DonationPage {
    site {
      siteMetadata {
        title
      }
    }
    ...Layout
  }
`;
