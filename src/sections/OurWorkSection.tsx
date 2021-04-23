import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import OurWorkCard from 'src/components/OurWorkCard';
import SectionHeader from 'src/components/SectionHeader';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.OurWorkSectionFragment;
}

function OurWorkSection({ data }: Props): JSX.Element {
  const { filterLocale } = useLocale();

  const cards = filterLocale(data.allContentfulOurWorkCard.nodes);
  const sortedCards = [...cards].sort((a, b) => (a.displayIndex ?? 0) - (b.displayIndex ?? 0));

  return (
    <Box id="our-work" bg="gray.extralight">
      <Box>
        <SectionHeader text="Our Work" textPosition="left" />
      </Box>
      <Flex
        justify="space-evenly"
        py={{ base: 0, md: 50 }}
        direction={{ base: 'column', md: 'row' }}
        flexWrap="wrap"
      >
        {sortedCards.map(card => (
          <Box key={card.title} mx="10px">
            <OurWorkCard data={card} />
          </Box>
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
