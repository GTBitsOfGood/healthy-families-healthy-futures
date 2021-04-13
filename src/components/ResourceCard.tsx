import React from 'react';

import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, LinkBox, LinkOverlay, Text, VStack } from '@chakra-ui/layout';
import { graphql } from 'gatsby';

interface Props {
  data: GatsbyTypes.ResourceCardFragment;
}

function ResourceCard({ data }: Props): JSX.Element {
  const title = data.title;
  const body = data.body?.childMarkdownRemark?.rawMarkdownBody;
  const link = data.link;

  return (
    <Box maxW="xl" p={10}>
      <VStack align="stretch" borderLeft="solid" borderLeftColor="creamsicle" pl={5}>
        <Text textStyle="body2" color="creamsicle">
          {title}
        </Text>
        <Text textStyle="body3">{body}</Text>
        <Box align="end">
          <LinkBox>
            <LinkOverlay href={link ?? '#'} isExternal>
              <Button variant="secondary" rightIcon={<ArrowForwardIcon />}>
                Check it out
              </Button>
            </LinkOverlay>
          </LinkBox>
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
    link
  }
`;
