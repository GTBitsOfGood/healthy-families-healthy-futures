import React from 'react';

import { Box, Collapse, Button, VStack, Heading, Flex, Link, HStack } from '@chakra-ui/react';
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

  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);

  const handleToggle1 = () => setShow1(!show1);
  const handleToggle2 = () => setShow2(!show2);
  const handleToggle3 = () => setShow3(!show3);

  return (
    <Flex
      bgColor="charcoal"
      h={{ md: '384px' }}
      w="full"
      wrap="nowrap"
      flexDir="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      p={{ base: '47px', md: '98px' }}
      maxH={{ base: '813px', md: '384px' }}
    >
      <VStack display={{ base: 'flex', md: 'none' }}>
        <Flex align="center" flexDir="row">
          <Box w="150px" maxH="158px">
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

        <VStack>
          <Button
            onClick={handleToggle1}
            variant="unstyled"
            bg="charcoal"
            color="creamsicle"
            textStyle="heading1"
          >
            ABOUT US +
          </Button>
          <Collapse in={show1} animateOpacity>
            <VStack>
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
          </Collapse>

          <Button
            onClick={handleToggle2}
            variant="unstyled"
            bg="charcoal"
            color="creamsicle"
            textStyle="heading1"
          >
            GET INVOLVED +
          </Button>
          <Collapse in={show2} animateOpacity>
            <VStack>
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
          </Collapse>

          <Button
            onClick={handleToggle3}
            variant="unstyled"
            bg="charcoal"
            color="creamsicle"
            textStyle="heading1"
          >
            RESOURCES AND BLOG +
          </Button>
          <Collapse in={show3} animateOpacity>
            <VStack>
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
          </Collapse>
        </VStack>

        <HStack spacing={5} paddingTop="44px">
          <Link href="https://www.facebook.com/healthyfamilieshealthyfutures/" isExternal>
            <FacebookIcon w="40px" h="40px" />
          </Link>
          <Link href="https://www.instagram.com/healthy_futures/" isExternal>
            <InstagramIcon w="40px" h="40px" />
          </Link>
          <Link href="mailto:jrlatour37@gmail.com" isExternal>
            <EmailIcon w="40px" h="40px" />
          </Link>
        </HStack>
      </VStack>

      <Flex display={{ base: 'none', md: 'flex' }} align="center" flexDir="row">
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

      <Flex
        display={{ base: 'none', md: 'flex' }}
        flexDir="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
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

      <Flex
        display={{ base: 'none', md: 'flex' }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
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
