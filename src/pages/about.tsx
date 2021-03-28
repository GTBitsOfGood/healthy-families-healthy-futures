import React from 'react';

import { Box, Text, HStack, VStack, Image, Grid } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import AboutBanner from 'src/components/AboutBanner';
import DonateSection from 'src/components/DonateSection';
import OurStorySection from 'src/components/OurStorySection';
import OurWorkSection from 'src/components/OurWorkSection';

import Layout from '../components/Layout';
import NewsletterSection from '../components/NewsletterSection';

interface Props extends PageProps {
  data: GatsbyTypes.AboutQueryQuery;
}

function AboutPage(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <AboutBanner data={props.data} />

      <OurStorySection data={props.data} />

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
    ...AboutBanner
    ...OurWorkSection
    ...OurStorySection
  }
`;
