import React from 'react';

import { Box, Text, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'src/components/SectionHeader';

interface Props {
  data: GatsbyTypes.OurStorySectionFragment;
}

const OurStorySection = ({ data }: Props) => {
  const image = data.contentfulOurStory?.image;

  return (
    <>
      <Box mt={150} mb={110}>
        <SectionHeader text={data.contentfulOurStory?.title ?? 'Our Story'} textPosition="right" />
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
            {data.contentfulOurStory?.body?.childMarkdownRemark?.rawMarkdownBody}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default OurStorySection;

export const fragment = graphql`
  fragment OurStorySection on Query {
    contentfulOurStory {
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
    }
  }
`;
