import React from 'react';

import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import ResourceCard from 'src/components/ResourceCard';
import SectionHeader from 'src/components/SectionHeader';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.LinkDocFragment;
}

function LinkDocSection({ data }: Props): JSX.Element {
  const { findLocale, filterLocale } = useLocale();
  const section = findLocale(data.allContentfulLinkDocSection.nodes);
  const title = section?.title;
  const body = section?.body?.childMarkdownRemark?.rawMarkdownBody;

  const resourceCards = filterLocale(data.allContentfulResourceCard.nodes);

  return (
    <Box mb="160px">
      <Box marginBottom={100}>
        <SectionHeader text="Links &amp; Documents" textPosition="right" />
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
          {resourceCards.map((card, i) => (
            <ResourceCard key={i} data={card} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default LinkDocSection;

export const fragment = graphql`
  fragment LinkDoc on Query {
    allContentfulLinkDocSection {
      nodes {
        title
        body {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        node_locale
      }
    }
    allContentfulResourceCard {
      nodes {
        ...ResourceCard
        node_locale
      }
    }
  }
`;
