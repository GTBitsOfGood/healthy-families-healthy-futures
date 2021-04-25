import React from 'react';

import { Box, Flex, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'src/components/SectionHeader';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.OurSponsorSectionFragment;
}

const OurSponsorSection = ({ data }: Props) => {
  const { findLocale } = useLocale();

  const info = findLocale(data.allContentfulOurSponsorSection.nodes);

  return (
    <Box id="our-sponsor" mb="277px">
      <Box mb="189px">
        <SectionHeader text={info?.title ?? 'Our Sponsors & Partners'} textPosition="left" />
      </Box>

      {/* create row gap using negative margin on the parent,
        positive margin on children */}
      <Flex
        mt="-56px"
        mx={{ base: 0, md: `20%` }}
        justifyContent="space-evenly"
        direction={{ base: 'row', md: 'row' }}
      >
        {info?.sponsors != null &&
          info.sponsors.map(
            sponsor =>
              sponsor?.image?.fluid != null && (
                <LinkBox flexBasis="20%" mt="56px" key={sponsor.name}>
                  <LinkOverlay href={sponsor.link} isExternal>
                    <Box boxSize="106px">
                      <Img
                        style={{ overflow: 'visible' }}
                        imgStyle={{ borderRadius: '50%' }}
                        fluid={sponsor.image.fluid}
                        alt={sponsor.name ?? ''}
                      />
                    </Box>
                  </LinkOverlay>
                </LinkBox>
              ),
          )}
      </Flex>
    </Box>
  );
};

export default OurSponsorSection;

export const fragment = graphql`
  fragment OurSponsorSection on Query {
    allContentfulOurSponsorSection {
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
