import React from 'react';

import { Heading, Text, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.DonationDetailFragment;
}

function DonationDetailSection({ data }: Props): JSX.Element {
  const { findLocale } = useLocale();
  const section = findLocale(data.allContentfulDonationDetailSection.nodes);

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      bg="white"
      h={{ base: '585px', md: '428px' }}
      alignItems="center"
      justifyContent="space-evenly"
      px={{ base: '23px', md: 0 }}
      my={{ base: '95px', md: 0 }}
    >
      <Heading fontSize="50px" lineHeight="68px" maxW={{ base: 'none', lg: '370px' }}>
        {section?.title}
      </Heading>
      <Text maxW="622px">{section?.description?.description}</Text>
    </Flex>
  );
}

export default DonationDetailSection;

export const fragment = graphql`
  fragment DonationDetail on Query {
    allContentfulDonationDetailSection {
      nodes {
        title
        description {
          description
        }
        node_locale
      }
    }
  }
`;
