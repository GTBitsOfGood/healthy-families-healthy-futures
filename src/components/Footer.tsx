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
  useMediaQuery,
} from '@chakra-ui/react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';
import { Locale } from 'src/utils/types';
import { useMiscText } from 'src/utils/useMiscText';

import { FacebookIcon, InstagramIcon, EmailIcon } from './Icons';

function FooterMobileLinkGroup({
  group,
  toggle,
  show,
}: {
  group: NonNullable<
    GatsbyTypes.FooterFragment['allContentfulFooter']['nodes'][0]['linkGroups']
  >[0];
  toggle: () => void;
  show: boolean;
}): JSX.Element {
  if (group == null) {
    return <></>;
  }
  return (
    <Box>
      <Button
        onClick={toggle}
        variant="unstyled"
        bg="charcoal"
        color="creamsicle.500"
        textStyle="heading1"
      >
        {group.title} {show ? '-' : '+'}
      </Button>
      <Collapse in={show} animateOpacity>
        <VStack>
          <FooterLinks links={group.links} />
        </VStack>
      </Collapse>
    </Box>
  );
}

function FooterWebLinkGroup({
  group,
}: {
  group: NonNullable<
    GatsbyTypes.FooterFragment['allContentfulFooter']['nodes'][0]['linkGroups']
  >[0];
}): JSX.Element {
  return (
    <VStack m="22px" spacing="22px">
      <VStack alignItems="flex-start" spacing="15px">
        <Heading color="creamsicle.500" textStyle="subheading1">
          {group?.title}
        </Heading>
        <FooterLinks links={group?.links} />
      </VStack>
    </VStack>
  );
}

function FooterLinks({
  links,
}: {
  links: NonNullable<
    NonNullable<GatsbyTypes.FooterFragment['allContentfulFooter']['nodes'][0]['linkGroups']>[0]
  >['links'];
}): JSX.Element {
  if (links == null) {
    return <></>;
  }
  return (
    <>
      {links.map((link, i) => (
        <Link key={i} color="white" to={link?.link ?? '#'} textStyle="body3" as={GatsbyLink}>
          {link?.name}
        </Link>
      ))}
    </>
  );
}

interface Props {
  data: GatsbyTypes.FooterFragment;
}

function Footer({ data }: Props): JSX.Element {
  const { findLocale } = useLocale();
  const [isPrint] = useMediaQuery(['print']);

  const [show, setShow] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const { locale, setLocale } = useLocale();

  const footer = findLocale(data.allContentfulFooter.nodes);
  const { language: languageText } = useMiscText();

  const logo =
    footer?.image?.fluid != null ? (
      <Img
        fluid={footer?.image.fluid}
        alt={footer?.image.description}
        imgStyle={{ objectFit: 'contain' }}
        style={{ maxHeight: `158px` }}
      />
    ) : null;

  const languageSelect = (
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
  );

  const socialLinks = (size: string) => (
    <>
      <Link
        href={
          footer?.socialLinks?.facebook ?? 'https://www.facebook.com/healthyfamilieshealthyfutures/'
        }
        isExternal
      >
        <FacebookIcon w={size} h={size} fill="white" />
      </Link>
      <Link
        href={footer?.socialLinks?.instagram ?? 'https://www.instagram.com/healthy_futures/'}
        isExternal
      >
        <InstagramIcon w={size} h={size} fill="white" />
      </Link>
      <Link href={footer?.socialLinks?.email ?? 'mailto:healthyfamilies37@gmail.com'} isExternal>
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
            <GatsbyLink to="/">{logo}</GatsbyLink>
          </Box>
        </Flex>

        {isPrint ? null : (
          <>
            <VStack spacing="15px">
              {footer?.linkGroups?.map((group, i) => (
                <FooterMobileLinkGroup
                  group={group}
                  show={show[i]}
                  key={i}
                  toggle={() => setShow(oldShow => ({ ...oldShow, [i]: !oldShow[i] }))}
                />
              ))}

              <Box>
                <Button
                  onClick={() => setShow(oldShow => ({ ...oldShow, [3]: !oldShow[3] }))}
                  variant="unstyled"
                  bg="charcoal"
                  color="creamsicle.500"
                  textStyle="heading1"
                >
                  {languageText} {show[3] ? '-' : '+'}
                </Button>
                <Collapse in={show[3]} animateOpacity>
                  {languageSelect}
                </Collapse>
              </Box>
            </VStack>

            <HStack spacing={5} paddingTop="44px">
              {socialLinks('40px')}
            </HStack>
          </>
        )}
      </VStack>

      <Flex display={{ base: 'none', md: 'flex' }} align="center" flexDir="row">
        <Box m="22px" w="170px" maxH="158px">
          <GatsbyLink to="/">{logo}</GatsbyLink>
        </Box>
      </Flex>

      <Flex
        display={{ base: 'none', md: 'flex' }}
        flexDir="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        {footer?.linkGroups?.map((group, i) => (
          <FooterWebLinkGroup group={group} key={i} />
        ))}
      </Flex>

      <VStack
        display={{ base: 'none', md: 'flex' }}
        alignItems="flex-start"
        spacing="40px"
        justifyContent="space-between"
      >
        <VStack mt="22px" alignItems="flex-start">
          <Heading color="creamsicle.500" textStyle="subheading1">
            {footer?.socialLinks?.title}
          </Heading>
          <HStack spacing={5}>{socialLinks('32px')}</HStack>
        </VStack>

        <VStack m="22px" alignItems="flex-start">
          <Heading color="creamsicle.500" textStyle="subheading1">
            {languageText}
          </Heading>
          {languageSelect}
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Footer;

export const fragment = graphql`
  fragment Footer on Query {
    allContentfulFooter {
      nodes {
        node_locale
        linkGroups {
          title
          links {
            name
            link
          }
        }
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
          description
        }
        socialLinks {
          title
          facebook
          instagram
          email
        }
      }
    }
  }
`;
