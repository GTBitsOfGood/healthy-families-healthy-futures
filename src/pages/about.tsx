import React from 'react';

import { Box, Heading, Text, HStack, VStack, Image, Grid } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import DonateSection from 'src/components/DonateSection';
import OurWorkSection from 'src/components/OurWorkSection';

import Layout from '../components/Layout';
import NewsletterSection from '../components/NewsletterSection';

interface Props extends PageProps {
  data: GatsbyTypes.AboutQueryQuery;
}
function AboutPage(props: Props): JSX.Element {
  //   const sponsors = [
  //     'download.png',
  //     'download.png',
  //     'download.png',
  //     'download.png',
  //     'download.png',
  //     'download.png',
  //     'download.png',
  //     'download.png',
  //   ];
  return (
    <Layout location={props.location}>
      <HStack spacing={0}>
        <Box w="50%" h={631} marginRight={0}>
          <img src="missionBanner.png" alt=""></img>
        </Box>
        <Box w="50%" h={631} bg="creamsicle" marginLeft={0}>
          <Box h={155} bg="creamsicle"></Box>
          <VStack>
            <Box w={183} h={158}>
              <img src="whiteLogo.png" alt=""></img>
            </Box>
            <VStack>
              <Box w={500}>
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
            </VStack>
          </VStack>
        </Box>
      </HStack>

      <HStack marginBottom={170} marginTop="170px">
        <Box bg="creamsicle" w="100%" p={8}></Box>
        <Box w={640}>
          <Text textAlign={'center'} textStyle="heading1">
            OUR STORY
          </Text>
        </Box>
      </HStack>

      <HStack spacing={0}>
        <Box w="40%" h={631}>
          <Box w="50%" h={631} marginLeft="35%" marginTop={10}>
            <img src="download.png" alt=""></img>
          </Box>
        </Box>
        <Box w="60%" h={631}>
          <VStack>
            <Box w={529}>
              <Text textAlign="left" textStyle="body1">
                Eating habits are learned behaviors; they are not intuitive. What children learn to
                eat at home early in life will stick with them well into adulthood. Involving the
                whole family is the best way to promote better eating habits and healthy activities
                for your kids. Healthy Families – Healthy Futures was established to empower and
                support families, schools, and childcare centers with the knowledge and skills to
                make healthy food and beverage choices. Providing opportunities for nutrition
                education in schools, childcare centers, and in the family home is a vital part of
                uplifting the health of those that participate in the program. Healthy Families –
                Healthy Futures strives to promote a healthy future, one nutritious meal at a time.
              </Text>
            </Box>
          </VStack>
        </Box>
      </HStack>

      <OurWorkSection data={props.data} />

      <HStack marginBottom={170}>
        <Box bg="creamsicle" w="100%" p={8}></Box>
        <Box w={640}>
          <Text textAlign={'center'} textStyle="heading1">
            OUR FOUNDER
          </Text>
        </Box>
      </HStack>

      <HStack spacing={0}>
        <Box w="40%" h={631}>
          <Box w="50%" h={631} marginLeft="35%" marginTop={10}>
            <img src="headshot-1.png" alt=""></img>
          </Box>
        </Box>
        <Box w="60%" h={631}>
          <Box boxShadow="2xl" w={712} h={334}>
            <VStack>
              <Box w={580} marginTop={43}>
                <Text textAlign="left" textStyle="body1">
                  From 2015 to 2020, Chef John LaTour served as Program Manager and Chef Instructor
                  for the Smart Start of Mecklenburg Co. funded Healthy Futures Starting in the
                  Kitchen program attached to Central Piedmont Community College. In 2020, that
                  program ended, and Chef John left CPCC and started Healthy Families – Healthy
                  Futures Inc. as a non-profit organization striving to educate families and
                  individuals across North Carolina in healthy eating, cooking, and shopping.
                  Healthy Families – Healthy Futures is a registered non-profit in North Carolina.
                  The program’s 501(c)3 status is pending approval from the IRS.
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>
      </HStack>

      <HStack marginBottom={170} spacing={0}>
        <Box w={884} bg="gray.light" p={1}>
          <Text textAlign={'center'} textStyle="heading1">
            OUR SPONSERS AND PARTNERS
          </Text>
        </Box>
        <Box bg="creamsicle" w="80%" p={8}></Box>
      </HStack>

      <Grid
        marginBottom={277}
        marginLeft="20%"
        marginRight="20%"
        templateColumns="repeat(5, 1fr)"
        gap={20}
      >
        {/* for (i = 0; i < sponsors.length; i++) {

        } */}
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
      </Grid>

      <DonateSection />
      <NewsletterSection />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    ...OurWorkSection
  }
`;
