import React from 'react';

import { Box, Center, Wrap } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import GetInvolvedCard from 'src/components/GetInvolvedCard';
import SectionHeader from 'src/components/SectionHeader';

interface Props {
  data: GatsbyTypes.InvolvmentSectionFragment;
}

const InvolvmentSection = ({ data }: Props) => {
  const involvementCards = data?.allContentfulGetInvolvedCard.nodes;

  return (
    <Box bg="gray.extralight" pb={20}>
      <Box marginBottom={100}>
        <SectionHeader text="Ways to get Involved" textPosition="right" />
      </Box>
      <Center>
        <Wrap align="center" justify="center">
          {involvementCards.map(card => (
            <GetInvolvedCard key={card.title} data={card} />
          ))}
        </Wrap>
      </Center>
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
