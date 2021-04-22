import React from 'react';

import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { PayPalIcon } from 'src/components/Icons';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.DonateHeaderFragment;
}

const DonateHeader = ({ data }: Props) => {
  const { findLocale } = useLocale();
  const banner = findLocale(data.allContentfulDonateBanner.nodes);

  return (
    <Box
      minH={[213, null, 510]}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
    >
      {banner?.image?.fluid != null && (
        <Img
          fluid={banner?.image.fluid}
          alt={banner?.image.description}
          style={{ height: `100%`, position: 'absolute', width: `100%`, top: 0 }}
        />
      )}
      <Center zIndex={2}>
        <Center w="507px" h="354px" bg="white" boxShadow="card" px="50px">
          <VStack spacing="18px">
            <Heading
              color="creamsicle.500"
              fontSize="50px"
              lineHeight="68px"
              textTransform="uppercase"
            >
              {banner?.title ?? 'Title Missing'}
            </Heading>
            <Text textStyle="body1" textAlign="center">
              {banner?.description}
            </Text>
            <form action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="hosted_button_id" value="897VXU4F73VQE" />
              <Button
                rightIcon={<PayPalIcon h="22.5px" />}
                variant="neutral"
                textTransform="none"
                type="submit"
              >
                {banner?.ctaText}
              </Button>
            </form>
          </VStack>
        </Center>
      </Center>
    </Box>
  );
};

export default DonateHeader;

export const fragment = graphql`
  fragment DonateHeader on Query {
    allContentfulDonateBanner {
      nodes {
        title
        description
        ctaText
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
