import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';

import OurWorkCard from './OurWorkCard';
import SectionHeader from './SectionHeader';

interface Props {
  data: GatsbyTypes.OurWorkSectionFragment;
}

function OurWork({ data }: Props): JSX.Element {
  const cards = data.allContentfulOurWorkCard.nodes;
  const sortedCards = [...cards].sort((a, b) => (a.displayIndex ?? 0) - (b.displayIndex ?? 0));

  return (
    <Box h={900} bg="gray.extralight">
      <Box marginBottom={170}>
        <SectionHeader text="Our Work" textPosition="left" />
      </Box>
      <Flex justify="space-evenly">
        {sortedCards.map(card => (
          <OurWorkCard key={card.title} data={card} />
        ))}
      </Flex>
    </Box>
  );
}

export default OurWork;

export const fragment = graphql`
  fragment OurWorkSection on Query {
    allContentfulOurWorkCard {
      nodes {
        ...OurWorkCard
      }
    }
  }
`;
