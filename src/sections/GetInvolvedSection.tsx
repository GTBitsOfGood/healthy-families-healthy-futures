import React, { useContext } from 'react';

import { Box, Center, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import GetInvolvedCard from 'src/components/GetInvolvedCard';
import SectionHeader from 'src/components/SectionHeader';
import LocaleContext from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.GetInvolvedSectionFragment;
}

const GetInvolvedSection = ({ data }: Props) => {
  const { locale } = useContext(LocaleContext);
  const involvementCards = data?.allContentfulGetInvolvedCard.nodes.filter(
    d => d.node_locale === locale,
  );

  return (
    <Box bg="white" pb={20}>
      <Box marginBottom={100}>
        <SectionHeader text="Ways to get Involved" textPosition="right" />
      </Box>
      <Center>
        <Flex justify="space-evenly" direction={['column', null, null, 'row']} w="100%">
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
