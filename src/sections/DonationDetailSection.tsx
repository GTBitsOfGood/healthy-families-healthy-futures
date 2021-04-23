import React from 'react';

import { Heading, Text, Center, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.DonationDetailFragment;
}

function DonationDetailSection({ data }: Props): JSX.Element {
  const { findLocale } = useLocale();
  const section = findLocale(data.allContentfulDonationDetailSection.nodes);

  return (
    <Center bg="white" h="428px">
      <Flex direction={{ base: 'column', lg: 'row' }} justifyContent="center">
        <Heading fontSize="50px" lineHeight="68px" maxW={{ base: 'none', lg: '370px' }}>
          {section?.title}
        </Heading>
        <Text maxW="622px">{section?.description?.description}</Text>
      </Flex>
    </Center>
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
