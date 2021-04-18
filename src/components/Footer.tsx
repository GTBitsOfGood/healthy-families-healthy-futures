import React, { useState } from 'react';

import {
  Box,
  Collapse,
  Button,
  VStack,
  Heading,
  Flex,
  Link,
  HStack,
  Select,
} from '@chakra-ui/react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';
import { Locale } from 'src/utils/types';

import { FacebookIcon, InstagramIcon, EmailIcon } from './Icons';

interface Props {
  data: GatsbyTypes.FooterFragment;
}

function Footer({ data }: Props): JSX.Element {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleToggle1 = () => setShow1(!show1);
  const handleToggle2 = () => setShow2(!show2);
  const handleToggle3 = () => setShow3(!show3);
  const handleToggle4 = () => setShow4(!show4);

  const { locale, setLocale } = useLocale();

  const logo =
    data.footerImage?.fluid != null ? (
      <Img
        fluid={data.footerImage.fluid}
        alt={data.footerImage.description}
        imgStyle={{ objectFit: 'contain' }}
        style={{ maxHeight: `158px` }}
      />
    ) : null;

  const aboutUsLinks = (
    <>
      <Link color="white" to="/about#our-story" textStyle="body3" as={GatsbyLink}>
        Our Story
      </Link>
      <Link color="white" to="/about#our-work" textStyle="body3" as={GatsbyLink}>
        Our Work
      </Link>
      <Link color="white" to="/about#founder" textStyle="body3" as={GatsbyLink}>
        Founder
      </Link>
    </>
  );
  const getInvolvedLinks = (
    <>
      <Link color="white" to="/donate" textStyle="body3" as={GatsbyLink}>
        Donate
      </Link>
      <Link color="white" to="/events-classes" textStyle="body3" as={GatsbyLink}>
        Events/Classes
      </Link>
      <Link color="white" to="/contact-us" textStyle="body3" as={GatsbyLink}>
        Contact Us
      </Link>
    </>
  );
  const resourcesLinks = (
    <>
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
    </>
  );
  const socialLinks = (size: string) => (
    <>
      <Link href="https://www.facebook.com/healthyfamilieshealthyfutures/" isExternal>
        <FacebookIcon w={size} h={size} fill="white" />
      </Link>
      <Link href="https://www.instagram.com/healthy_futures/" isExternal>
        <InstagramIcon w={size} h={size} fill="white" />
      </Link>
      <Link href="mailto:jrlatour37@gmail.com" isExternal>
        <EmailIcon w={size} h={size} fill="white" />
      </Link>
    </>
  );

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
            {logo}
          </Box>
        </Flex>

        <VStack>
          <Button
            onClick={handleToggle1}
            variant="unstyled"
            bg="charcoal"
            color="creamsicle.500"
            textStyle="heading1"
          >
            ABOUT US +
          </Button>
          <Collapse in={show1} animateOpacity>
            <VStack>{aboutUsLinks}</VStack>
          </Collapse>

          <Button
            onClick={handleToggle2}
            variant="unstyled"
            bg="charcoal"
            color="creamsicle.500"
            textStyle="heading1"
          >
            GET INVOLVED +
          </Button>
          <Collapse in={show2} animateOpacity>
            <VStack>{getInvolvedLinks}</VStack>
          </Collapse>

          <Button
            onClick={handleToggle3}
            variant="unstyled"
            bg="charcoal"
            color="creamsicle.500"
            textStyle="heading1"
          >
            RESOURCES AND BLOG +
          </Button>
          <Collapse in={show3} animateOpacity>
            <VStack>{resourcesLinks}</VStack>
          </Collapse>

          <Button
            onClick={handleToggle4}
            variant="unstyled"
            bg="charcoal"
            color="creamsicle.500"
            textStyle="heading1"
          >
            LANGUAGE +
          </Button>
          <Collapse in={show4} animateOpacity>
            <Select
              variant="unstyled"
              color="white"
              sx={{ '>option': { background: 'charcoal' } }}
              onChange={e => setLocale(e.target.value as Locale)}
              defaultValue={locale}
            >
              <option value="en-US">English</option>
              <option value="es-US">Español</option>
            </Select>
          </Collapse>
        </VStack>

        <HStack spacing={5} paddingTop="44px">
          {socialLinks('40px')}
        </HStack>
      </VStack>

      <Flex display={{ base: 'none', md: 'flex' }} align="center" flexDir="row">
        <Box m="22px" w="170px" maxH="158px">
          {logo}
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
            <Heading color="creamsicle.500" textStyle="subheading1">
              About Us
            </Heading>
            {aboutUsLinks}
          </VStack>
        </VStack>

        <VStack m="22px" spacing="22px">
          <VStack alignItems="flex-start" spacing="15px">
            <Heading color="creamsicle.500" textStyle="subheading1">
              Get Involved
            </Heading>
            {getInvolvedLinks}
          </VStack>
        </VStack>

        <VStack m="22px" spacing="22px">
          <VStack alignItems="flex-start" spacing="15px">
            <Heading color="creamsicle.500" textStyle="subheading1">
              Resources and Blog
            </Heading>
            {resourcesLinks}
          </VStack>
        </VStack>
      </Flex>

      <VStack
        display={{ base: 'none', md: 'flex' }}
        alignItems="flex-start"
        spacing="40px"
        justifyContent="space-between"
      >
        <VStack mt="22px" alignItems="flex-start">
          <Heading color="creamsicle.500" textStyle="subheading1">
            Stay Connected
          </Heading>
          <HStack spacing={5}>{socialLinks('32px')}</HStack>
        </VStack>

        <VStack m="22px" alignItems="flex-start">
          <Heading color="creamsicle.500" textStyle="subheading1">
            Language
          </Heading>
          <Select
            variant="unstyled"
            color="white"
            sx={{ '>option': { background: 'charcoal' } }}
            onChange={e => setLocale(e.target.value as Locale)}
            defaultValue={locale}
          >
            <option value="en-US">English</option>
            <option value="es-US">Español</option>
          </Select>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Footer;

export const fragment = graphql`
  fragment Footer on Query {
    footerImage: contentfulAsset(title: { eq: "Logo Transparent" }) {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
      description
    }
  }
`;
