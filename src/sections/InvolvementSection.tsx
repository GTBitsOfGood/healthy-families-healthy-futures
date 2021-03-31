import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import GetInvolvedCard from 'src/components/GetInvolvedCard';
import SectionHeader from 'src/components/SectionHeader';

interface Props {
  data: GatsbyTypes.InvolvmentSectionFragment;
}

const InvolvmentSection = ({ data }: Props) => {
  const involvementCards = data?.allContentfulGetInvolvedCard.nodes;

  return (
    <Box h={600} bg="gray.extralight">
      <Box marginBottom={170}>
        <SectionHeader text="Ways to get Involved" textPosition="right" />
      </Box>
      <Flex justify="space-evenly">
        {involvementCards.map(card => (
          <GetInvolvedCard key={card.title} data={card} />
        ))}
      </Flex>
    </Box>
  );
};

export default InvolvmentSection;

export const fragment = graphql`
  fragment InvolvmentSection on Query {
    allContentfulGetInvolvedCard {
      nodes {
        ...GetInvolvedCard
      }
    }
  }
`;
