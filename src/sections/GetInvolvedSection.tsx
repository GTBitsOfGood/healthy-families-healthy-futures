import React from 'react';

import { Box, Center, Flex, useBreakpointValue, Grid, GridItem } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import GetInvolvedCard from 'src/components/GetInvolvedCard';
import SectionHeader from 'src/components/SectionHeader';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.GetInvolvedSectionFragment;
}

const GetInvolvedSection = ({ data }: Props) => {
  const { filterLocale } = useLocale();
  const involvementCards = filterLocale(data?.allContentfulGetInvolvedCard.nodes);
  const variant = useBreakpointValue({ base: 'grid', md: 'flex' });

  return (
    <Box bg="white" pb={20}>
      <Box marginBottom={{ base: 70, md: 100 }}>
        <SectionHeader text="Ways to get Involved" textPosition="right" />
      </Box>
      <Center>
        {variant === 'flex' ? (
          <Flex
            justify="space-evenly"
            direction={['column', null, null, 'row']}
            w="100%"
            align="center"
          >
            {involvementCards.map(card => (
              <GetInvolvedCard key={card.title} data={card} />
            ))}
          </Flex>
        ) : (
          <Grid w="100%" templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" rowGap={8}>
            {involvementCards.map(card => (
              <GridItem align="center" key={card.title} rowSpan={1} colSpan={1}>
                <GetInvolvedCard data={card} />
              </GridItem>
            ))}
          </Grid>
        )}
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
