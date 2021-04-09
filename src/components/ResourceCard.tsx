import React from 'react';

import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import { graphql } from 'gatsby';

interface Props {
  data: GatsbyTypes.ResourceCardFragment;
}

function ResourceCard({ data }: Props): JSX.Element {
  const title = data.title;
  const body = data.body?.childMarkdownRemark?.rawMarkdownBody;

  return (
    <Box maxW="xl" p={10}>
      <VStack align="stretch" borderLeft="solid" borderLeftColor="creamsicle" pl={5}>
        <Text textStyle="body3" color="creamsicle">
          {title}
        </Text>
        <Text textStyle="body3">{body}</Text>
        <Box align="end">
          <Button variant="secondary">
            <HStack align="center">
              <Text>CHECK IT OUT</Text>
              <ArrowForwardIcon />
            </HStack>
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default ResourceCard;

export const fragment = graphql`
  fragment ResourceCard on ContentfulResourceCard {
    title
    body {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
  }
`;
