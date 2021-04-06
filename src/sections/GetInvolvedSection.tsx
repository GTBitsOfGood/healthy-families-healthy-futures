import React from 'react';

import { Box, Center, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import GetInvolvedCard from 'src/components/GetInvolvedCard';
import SectionHeader from 'src/components/SectionHeader';

interface Props {
  data: GatsbyTypes.GetInvolvedSectionFragment;
}

const GetInvolvedSection = ({ data }: Props) => {
  const involvementCards = data?.allContentfulGetInvolvedCard.nodes;

  return (
    <Box bg="white" pb={20}>
      <Box marginBottom={100}>
        <SectionHeader text="Ways to get Involved" textPosition="right" />
      </Box>
      <Center>
        <Flex justify="space-evenly" direction={["column", null, null, "row"]} w="100%">
          {involvementCards.map(card => (
            <GetInvolvedCard key={card.title} data={card} />
          ))}
        </Flex>
      </Center>
    </Box>
  );
};

export default GetInvolvedSection;

export const fragment = graphql`
  fragment GetInvolvedSection on Query {
    allContentfulGetInvolvedCard {
      nodes {
        ...GetInvolvedCard
      }
    }
  }
`;
