import React from 'react';

import {
  BackgroundProps,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { PageProps } from 'gatsby';
import { MdChevronLeft, MdSearch } from 'react-icons/md';
import Layout from 'src/components/Layout';

type Props = PageProps;

function ColorTile({
  hex,
  name,
  displayname,
  light,
}: {
  hex: string;
  name: BackgroundProps['bg'];
  displayname: string;
  light?: boolean;
}): JSX.Element {
  return (
    <WrapItem>
      <VStack w={32}>
        <Flex bg={name} h={44} w={32} p={3} dir="column" border={light ? `1px solid black` : ''}>
          <Text textStyle="body1" color={light ? 'black' : 'white'} mt="auto">
            {hex}
          </Text>
        </Flex>
        <Text textStyle="body1" textAlign="center">
          {displayname}
        </Text>
      </VStack>
    </WrapItem>
  );
}

function DemoPage(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <Heading textStyle="heading1" mb={5}>
        Colors
      </Heading>
      <Wrap spacing={0} mb={5}>
        <ColorTile hex="#23512A" name="green.700" displayname="Darkest Green" />
        <ColorTile hex="#3A8245" name="green.600" displayname="Dark Green" />
        <ColorTile hex="#65BF73" name="green.500" displayname="HF-HF Green" />
        <ColorTile hex="#BA5F0C" name="tangerine.700" displayname="Darkest Tangerine" />
        <ColorTile hex="#E57A16" name="tangerine.600" displayname="Darker Tangerine" />
        <ColorTile hex="#FF9737" name="tangerine.500" displayname="Tangerine" />
        <ColorTile hex="#404040" name="charcoal" displayname="Charcoal Black" />
        <ColorTile hex="#6C6C6C" name="gray.mid" displayname="Mid Grey" />
        <ColorTile hex="#C4C4C4" name="gray.light" displayname="Light Grey" />
        <ColorTile hex="#000000" name="black" displayname="Black" />
        <ColorTile hex="#FFFFFF" name="white" displayname="White" light />
      </Wrap>

      <Heading textStyle="heading1" mb={5}>
        Typography
      </Heading>
      <VStack spacing={0}>
        <Heading textStyle="heading1">Heading 1 - Avenir Heavy 35 pt.</Heading>
        <Heading textStyle="heading2">Heading 2 - Avenir Heavy 28 pt.</Heading>
        <Heading textStyle="subheading1">Sub Heading 1 - Avenir Heavy 16 pt.</Heading>
        <Heading textStyle="subheading2">Sub Heading 2 - Avenir Heavy 14 pt.</Heading>
        <Text textStyle="body1">Body 1 - Avenir Medium 18 pt.</Text>
        <Text textStyle="body2">Body 2 - Avenir Medium 16 pt.</Text>
        <Text textStyle="body3">Body 3 - Avenir Medium 14 pt.</Text>
      </VStack>

      <Heading textStyle="heading1" my={5}>
        Buttons / CTAs
      </Heading>
      <HStack mb={10}>
        <VStack>
          <Button variant="primary">Donate</Button>
          <Text textStyle="body1">Primary</Text>
        </VStack>
        <VStack>
          <Button variant="neutral">Subscribe</Button>
          <Text textStyle="body1">Neutral</Text>
        </VStack>
        <VStack>
          <Button variant="secondary">Get Involved</Button>
          <Text textStyle="body1">Secondary</Text>
        </VStack>
        <VStack>
          <Button variant="back" leftIcon={<Icon as={MdChevronLeft} />}>
            Back to Recipes
          </Button>
          <Text textStyle="body1">Page Redirection</Text>
        </VStack>
      </HStack>

      <Heading textStyle="heading1" my={5}>
        Search Bar
      </Heading>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={MdSearch} color="black" />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>

      <Heading textStyle="heading1" mb={5}>
        Responsiveness
      </Heading>
      <Center w="full" h={32} bg={['green.500', null, 'green.700']} transition="250ms all" mb={5}>
        <Text textStyle="heading2" color="white" display={['none', null, 'block']}>
          the screen is at least 40em wide
        </Text>
        <Text textStyle="heading2" color="white" display={['block', null, 'none']}>
          the screen is less than 40em wide
        </Text>
      </Center>
    </Layout>
  );
}

export default DemoPage;
