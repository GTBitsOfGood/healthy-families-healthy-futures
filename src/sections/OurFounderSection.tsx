import React, { useContext } from 'react';

import { HStack, Box, VStack, Text, Center, Button, useTheme } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'src/components/SectionHeader';
import LocaleContext from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.OurFounderSectionFragment;
}

const OurFounderSection = ({ data }: Props) => {
  const theme = useTheme();
  const { locale } = useContext(LocaleContext);

  const founder = data.allContentfulOurFounder.nodes?.find(d => d.node_locale === locale);

  return (
    <>
      <Box>
        <SectionHeader text={founder?.title ?? 'Our Founder'} textPosition="right" />
      </Box>

      <Center h={748}>
        <VStack spacing="100px">
          <HStack justifyContent="center" spacing={20}>
            <Box
              w="272px"
              borderRadius="50%"
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
              boxShadow={`9px 9px 0px 0px ${theme.colors.green[500]}`}
            >
              {founder?.image?.fluid != null && (
                <Img
                  style={{ overflow: 'visible' }}
                  imgStyle={{ borderRadius: '50%' }}
                  fluid={founder?.image.fluid}
                  alt={founder.image.description}
                />
              )}
            </Box>
            <Center boxShadow="card" w={712} h={334}>
              <Box w={580}>
                <Text textAlign="left" textStyle="body1">
                  {founder?.description?.childMarkdownRemark?.rawMarkdownBody}
                </Text>
              </Box>
            </Center>
          </HStack>
          <Button variant="neutral">{founder?.ctaText}</Button>
        </VStack>
      </Center>
    </>
  );
};

export default OurFounderSection;

export const fragment = graphql`
  fragment OurFounderSection on Query {
    allContentfulOurFounder {
      nodes {
        title
        ctaLink
        ctaText
        description {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
          description
        }
        node_locale
      }
    }
  }
`;
