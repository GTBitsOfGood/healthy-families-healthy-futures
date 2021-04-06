import React from 'react';

import { Box, Text, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'src/components/SectionHeader';
import { useLocaleContext } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.OurStorySectionFragment;
}

const OurStorySection = ({ data }: Props) => {
  const { locale } = useLocaleContext();

  const section = data.allContentfulOurStory.nodes?.find(d => d.node_locale === locale);

  const image = section?.image;

  return (
    <>
      <Box mt={{ base: 70, md: 150 }} mb={{ base: 70, md: 110 }}>
        <SectionHeader text={section?.title ?? 'Our Story'} textPosition="right" />
      </Box>

      <Flex
        justifyContent="space-evenly"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'normal' }}
      >
        <Box mb={{ base: 30, md: 0 }} w={{ base: 233, md: 433 }} h={{ md: 631 }}>
          {image?.fluid != null && <Img fluid={image.fluid} alt={image.description} />}
        </Box>
        <Box
          mt={{ base: 0 }}
          mb={{ base: 50, md: 0 }}
          w={{ base: '80vw', md: '40vw' }}
          pt={{ base: 0, md: '60px' }}
        >
          <Text
            textAlign="left"
            textStyle="body1"
            fontSize={[18, null, 18]}
            lineHeight={[1.3666, null, 1.3666]}
          >
            {section?.body?.childMarkdownRemark?.rawMarkdownBody}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default OurStorySection;

export const fragment = graphql`
  fragment OurStorySection on Query {
    allContentfulOurStory {
      nodes {
        title
        body {
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
