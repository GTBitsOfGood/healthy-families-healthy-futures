import React, { useContext } from 'react';

import { Box, Text, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'src/components/SectionHeader';
import LocaleContext from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.OurStorySectionFragment;
}

const OurStorySection = ({ data }: Props) => {
  const { locale } = useContext(LocaleContext);

  const section = data.allContentfulOurStory.nodes?.find(d => d.node_locale === locale);

  const image = section?.image;

  return (
    <>
      <Box mt={150} mb={110}>
        <SectionHeader text={section?.title ?? 'Our Story'} textPosition="right" />
      </Box>

      <Flex justifyContent="space-evenly">
        <Box w={433} h={631}>
          {image?.fluid != null && <Img fluid={image.fluid} alt={image.description} />}
        </Box>
        <Box w={529} pt="60px">
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
