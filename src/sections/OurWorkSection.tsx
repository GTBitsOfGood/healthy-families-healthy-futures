import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import OurWorkCard from 'src/components/OurWorkCard';
import SectionHeader from 'src/components/SectionHeader';

interface Props {
  data: GatsbyTypes.OurWorkSectionFragment;
}

function OurWorkSection({ data }: Props): JSX.Element {
  const cards = data.allContentfulOurWorkCard.nodes;
  const sortedCards = [...cards].sort((a, b) => (a.displayIndex ?? 0) - (b.displayIndex ?? 0));

  return (
    <Box bg="gray.extralight">
      <Box>
        <SectionHeader text="Our Work" textPosition="left" />
      </Box>
      <Flex
        justify="space-between"
        py={{ base: 0, md: 50 }}
        direction={{ base: 'column', md: 'row' }}
      >
        {sortedCards.map(card => (
          <OurWorkCard key={card.title} data={card} />
        ))}
      </Flex>
    </Box>
  );
}

export default OurWorkSection;

export const fragment = graphql`
  fragment OurWorkSection on Query {
    allContentfulOurWorkCard {
      nodes {
        ...OurWorkCard
      }
    }
  }
`;
