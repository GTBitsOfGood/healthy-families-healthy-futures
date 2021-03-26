import {
  Box,
  VStack,
  Heading,
  Flex,
  Link,
  HStack,
  Text,
  Stack,
  Center,
  Input,
  Button,
  Image,
} from '@chakra-ui/react';
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { FacebookIcon, InstagramIcon, EmailIcon } from './Icons';

function DonateSection(): JSX.Element {
  return (
    <>
      <HStack spacing={0}>
        <Box h={480}>
          <Image boxSize="480px" objectFit="cover" src="donationBanner.png" alt="donation_banner" />
        </Box>
        <Box w="70%" h={480} bg="creamsicle">
          <Box h={155} bg="creamsicle"></Box>
          <Stack direction="row">
            <Box marginLeft={170} w={183} h={158}>
              <img src="whiteLogo.png" alt=""></img>
            </Box>
            <Stack direction="column">
              <Box w={320} marginLeft={55}>
                <Heading textAlign="left" textStyle="heading1" color="charcoal">
                  Help Us Grow
                </Heading>
                <Text textAlign="left" textStyle="body1">
                  Even small contributions can help us continue our work to provide nutritional
                  education
                </Text>
                <Box marginTop={5}>
                  <Button align="left" variant="primary" fontSize="16px">
                    DONATE
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </HStack>
    </>
  );
}

export default DonateSection;
