import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'src/components/SectionHeader';
import { useLocaleContext } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.OurSponsorSectionFragment;
}

const OurSponsorSection = ({ data }: Props) => {
  const { locale } = useLocaleContext();

  const info = data.allContentfulOurSponsor.nodes?.find(d => d.node_locale === locale);

  return (
    <>
      <Box mb="189px">
        <SectionHeader text={info?.title ?? 'Our Sponsors & Partners'} textPosition="left" />
      </Box>

      {/* create row gap using negative margin on the parent,
        positive margin on children */}
      <Flex
        mt="-56px"
        mb="277px"
        mx={{ base: 0, md: `20%` }}
        justifyContent="space-evenly"
        direction={{ base: 'row', md: 'row' }}
      >
        {info?.sponsors != null &&
          info.sponsors.map(
            sponsor =>
              sponsor?.image?.fluid != null && (
                <Box flexBasis="20%" mt="56px">
                  <Box boxSize="106px">
                    <Img
                      style={{ overflow: 'visible' }}
                      imgStyle={{ borderRadius: '50%' }}
                      fluid={sponsor.image.fluid}
                      alt={sponsor.name ?? ''}
                    />
                  </Box>
                </Box>
              ),
          )}
      </Flex>
    </>
  );
};

export default OurSponsorSection;

export const fragment = graphql`
  fragment OurSponsorSection on Query {
    allContentfulOurSponsor {
      nodes {
        title
        sponsors {
          id
          image {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
            description
          }
          link
          name
        }
        node_locale
      }
    }
  }
`;
