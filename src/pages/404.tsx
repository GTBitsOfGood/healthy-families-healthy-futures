/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access */
import React from 'react';

import { Box, Flex, Heading, Text, useTheme } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import Layout from 'src/components/Layout';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props extends PageProps {
  data: GatsbyTypes.ErrorPageQuery;
}

const ErrorPage = ({ data }: Props) => {
  const { findLocale } = useLocale();
  const theme = useTheme();

  const page = findLocale(data.allContentfulErrorPage.nodes);

  return (
    <Layout data={data}>
      <Flex
        h={{ base: '600px', md: '790px' }}
        alignItems="center"
        justifyContent="space-evenly"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Box maxW={{ base: '380px', md: '709px' }} mx="17px">
          <Heading
            fontSize={{ base: '30px', md: '50px' }}
            lineHeight={{ base: '46px', md: '78px' }}
            fontWeight={850}
          >
            <span style={{ color: `${theme.colors.creamsicle[500]}` }}>
              {page?.heading?.split(' ')[0]}
            </span>{' '}
            {page?.heading?.split(' ').slice(1).join(' ')}
          </Heading>
          <Heading
            textStyle="heading2"
            color="gray.mid"
            textAlign={{ base: 'center', md: 'start' }}
          >
            {page?.subheading}
          </Heading>
        </Box>
        <Box>
          <Text
            color="creamsicle.500"
            fontSize="150px"
            lineHeight="205px"
            textDecoration="underline"
            fontWeight={800}
            style={{
              textUnderlineOffset: '20px',
              textDecorationColor: `${theme.colors.green[500]}`,
            }}
          >
            404
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ErrorPage;

export const fragment = graphql`
  query ErrorPage {
    ...Layout
    site {
      siteMetadata {
        title
      }
    }
    allContentfulErrorPage {
      nodes {
        node_locale
        heading
        subheading
      }
    }
  }
`;
