import React from 'react';

import { Box, Heading, Text, HStack, Stack } from '@chakra-ui/react';
import { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import DonateSection from 'src/components/DonateSection';
import OurWork from 'src/components/OurWork';

type Props = PageProps;

function AboutPage(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <HStack>
        <Box w="40%" h={480} marginRight={0}>
          <img src="about-group-photo.png" alt=""></img>
        </Box>
        <Box w="60%" h={500} bg="creamsicle" marginLeft={0}>
          <Box h={155} bg="creamsicle"></Box>
          <Stack direction="column">
            <Box marginLeft={350} marginTop={-20} w={183} h={158}>
              <img src="HF-HF-logo-white.png" alt=""></img>
            </Box>
            <Stack direction="column">
              <Box w={500} marginLeft={200}>
                <Heading textAlign="center" textStyle="heading1" color="charcoal">
                  OUR MISSION
                </Heading>
                <Text textAlign="center" textStyle="body1">
                  Healthy Families-Healthy Futures is dedicated to empowering teachers, school
                  staff, and families of young children to embrace healthy eating habits by
                  equipping them with the tools and educated support system they need to make
                  healthy food choices.
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </HStack>

      <HStack marginBottom={170} marginTop="151px">
        <Box bg="creamsicle" w="100%" p={8}></Box>
        <Box w={640}>
          <Text textAlign={'center'} textStyle="heading1">
            OUR STORY
          </Text>
        </Box>
      </HStack>

      <OurWork />

      <HStack marginBottom={170}>
        <Box bg="creamsicle" w="100%" p={8}></Box>
        <Box w={640}>
          <Text textAlign={'center'} textStyle="heading1">
            OUR FOUNDER
          </Text>
        </Box>
      </HStack>

      <HStack marginBottom={170}>
        <Box w={500}>
          <Text textAlign={'center'} textStyle="heading1">
            OUR SPONSERS AND PARTNERS
          </Text>
        </Box>
        <Box bg="creamsicle" w="80%" p={8}></Box>
      </HStack>

      <DonateSection />
      <Newsletter />
    </Layout>
  );
}

export default AboutPage;
