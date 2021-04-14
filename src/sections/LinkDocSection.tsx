import React from 'react';

import { Button } from '@chakra-ui/button';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Center, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/react';
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

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const resourceCards = filterLocale(data.allContentfulResourceCard.nodes);
  const resourceCardsFirstChunk = resourceCards.slice(0, 3);
  const resourceCardsSecChunk = resourceCards.slice(3, resourceCards.length);

  return (
    <Box mb={{ base: '73px', md: '160px' }}>
      <Box marginBottom={{ base: '53px', md: '100px' }}>
        <SectionHeader text="Links &amp; Documents" textPosition="right" />
      </Box>
      <VStack spacing={20} display={{ base: 'none', md: 'flex' }}>
        <Box bgColor="creamsicle" w={{ base: '338px', md: '795px' }} p={10} maxW={700}>
          <VStack>
            <Text textStyle="heading1">{title}</Text>
            <Text textStyle="body1" textAlign="center">
              {body}
            </Text>
          </VStack>
        </Box>
        <SimpleGrid w={{ base: '380px', md: 'full' }} columns={{ base: 1, md: 2 }}>
          {resourceCards.map((card, i) => (
            <Center key={i}>
              <ResourceCard data={card} />
            </Center>
          ))}
        </SimpleGrid>
      </VStack>
      <VStack display={{ base: 'flex', md: 'none' }}>
        <SimpleGrid
          display={{ base: 'grid', md: 'none' }}
          w={{ base: '380px', md: 'full' }}
          columns={{ base: 1, md: 2 }}
        >
          {resourceCardsFirstChunk.map((card, i) => (
            <ResourceCard key={i} data={card} />
          ))}
        </SimpleGrid>
        <Collapse in={show}>
          <SimpleGrid w="380px" columns={{ base: 1, md: 2 }}>
            {resourceCardsSecChunk.map((card, i) => (
              <ResourceCard key={i} data={card} />
            ))}
          </SimpleGrid>
        </Collapse>
        <Button
          rightIcon={show ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={handleToggle}
          textStyle="heading1"
          variant="ghost"
        >
          {show ? 'VIEW LESS' : 'VIEW MORE'}
        </Button>
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
