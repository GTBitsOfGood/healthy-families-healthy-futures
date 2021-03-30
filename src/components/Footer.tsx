/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { Box, VStack, Heading, Flex, Link, HStack } from '@chakra-ui/react';
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { FacebookIcon, InstagramIcon, EmailIcon } from './Icons';

function Footer(): JSX.Element {
  const data: GatsbyTypes.FooterQuery = useStaticQuery<GatsbyTypes.FooterQuery>(graphql`
    query Footer {
      contentfulAsset(title: { eq: "Logo Transparent" }) {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
        description
      }
    }
  `);

  return (
    <Flex
      bgColor="charcoal"
      h="384px"
      w="full"
      wrap="nowrap"
      flexDir="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      p="98px"
    >
      <Flex align="center" flexDir="row">
        <Box m="22px" w="170px" maxH="158px">
          {data.contentfulAsset?.fluid != null ? (
            <Img
              fluid={data.contentfulAsset.fluid}
              alt={data.contentfulAsset.description}
              imgStyle={{ objectFit: 'contain' }}
              style={{ maxHeight: `158px` }}
            />
          ) : null}
        </Box>
      </Flex>

      <Flex flexDir="row" justifyContent="space-evenly" alignItems="flex-start">
        <VStack m="22px" spacing="22px">
          <VStack alignItems="flex-start" spacing="15px">
            <Heading color="creamsicle" textStyle="subheading1">
              About Us
            </Heading>
            <Link color="white" to="/about#our-story" textStyle="body3" as={GatsbyLink}>
              Our Story
            </Link>
            <Link color="white" to="/about#our-work" textStyle="body3" as={GatsbyLink}>
              Our Work
            </Link>
            <Link color="white" to="/about#founder" textStyle="body3" as={GatsbyLink}>
              Founder
            </Link>
          </VStack>
        </VStack>

        <VStack m="22px" spacing="22px">
          <VStack alignItems="flex-start" spacing="15px">
            <Heading color="creamsicle" textStyle="subheading1">
              Get Involved
            </Heading>
            <Link color="white" to="/donate" textStyle="body3" as={GatsbyLink}>
              Donate
            </Link>
            <Link color="white" to="/events-classes" textStyle="body3" as={GatsbyLink}>
              Events/Classes
            </Link>
            <Link color="white" to="/contact-us" textStyle="body3" as={GatsbyLink}>
              Contact Us
            </Link>
          </VStack>
        </VStack>

        <VStack m="22px" spacing="22px">
          <VStack alignItems="flex-start" spacing="15px">
            <Heading color="creamsicle" textStyle="subheading1">
              Resources and Blog
            </Heading>
            <Link color="white" to="/recipes" textStyle="body3" as={GatsbyLink}>
              Recipes
            </Link>
            <Link color="white" to="/blog" textStyle="body3" as={GatsbyLink}>
              Blog
            </Link>
            <Link color="white" to="/links-documents" textStyle="body3" as={GatsbyLink}>
              Links/Documents
            </Link>
            <Link color="white" to="/media" textStyle="body3" as={GatsbyLink}>
              Media
            </Link>
          </VStack>
        </VStack>
      </Flex>

      <Flex justifyContent="space-between" alignItems="flex-start">
        <VStack m="22px" alignItems="flex-start">
          <Heading color="creamsicle" textStyle="subheading1">
            Stay Connected
          </Heading>
          <HStack spacing={5}>
            <Link href="https://www.facebook.com/healthyfamilieshealthyfutures/" isExternal>
              <FacebookIcon w={8} h={8} />
            </Link>
            <Link href="https://www.instagram.com/healthy_futures/" isExternal>
              <InstagramIcon w={8} h={8} />
            </Link>
            <Link href="mailto:jrlatour37@gmail.com" isExternal>
              <EmailIcon w={8} h={8} />
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Footer;
