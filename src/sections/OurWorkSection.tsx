import React, { useContext } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import OurWorkCard from 'src/components/OurWorkCard';
import SectionHeader from 'src/components/SectionHeader';
import LocaleContext from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.OurWorkSectionFragment;
}

function OurWorkSection({ data }: Props): JSX.Element {
  const { locale } = useContext(LocaleContext);

  const cards = data.allContentfulOurWorkCard.nodes.filter(d => d.node_locale === locale);
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

export default OurWorkSection;

export const fragment = graphql`
  fragment OurWorkSection on Query {
    allContentfulOurWorkCard {
      nodes {
        ...OurWorkCard
        node_locale
      }
    }
  }
`;
