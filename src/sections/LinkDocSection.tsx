import React from 'react';

import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import ResourceCard from 'src/components/ResourceCard';
import SectionHeader from 'src/components/SectionHeader';

interface Props {
  data: GatsbyTypes.LinkDocFragment;
}

function LinkDocSection({ data }: Props): JSX.Element {
  const title = data.contentfulLinkDocSection?.title;
  const body = data.contentfulLinkDocSection?.body?.childMarkdownRemark?.rawMarkdownBody;
  const resourceCards = data.allContentfulResourceCard.nodes;

  return (
    <Box bg="gray.extralight" p={20}>
      <Box marginBottom={100}>
        <SectionHeader text="Links & Documents" textPosition="right" />
      </Box>
      <VStack spacing={20}>
        <Box bgColor="creamsicle" p={10} maxW={700}>
          <VStack>
            <Text textStyle="heading1">{title}</Text>
            <Text textStyle="body1" textAlign="center">
              {body}
            </Text>
          </VStack>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          {resourceCards.map(card => (
            <ResourceCard key={card.title} data={card} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default LinkDocSection;

export const fragment = graphql`
  fragment LinkDoc on Query {
    contentfulLinkDocSection {
      title
      body {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
    allContentfulResourceCard {
      nodes {
        ...ResourceCard
      }
    }
  }
`;
