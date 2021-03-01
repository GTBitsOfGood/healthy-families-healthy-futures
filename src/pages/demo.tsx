import React from 'react';

import { BackgroundProps, Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { PageProps } from 'gatsby';
import Layout from 'src/components/Layout';

type Props = PageProps;

function ColorTile({
  hex,
  name,
  displayname,
}: {
  hex: string;
  name: BackgroundProps['bg'];
  displayname: string;
}): JSX.Element {
  return (
    <VStack>
      <Flex bg={name} h={44} w={32} p={3} dir="column">
        <Text textStyle="subheading1" color="white" mt="auto">
          {hex}
        </Text>
      </Flex>
      <Text textStyle="subheading1">{displayname}</Text>
    </VStack>
  );
}

function DemoPage(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <Heading textStyle="heading1" mb={5}>
        Colors
      </Heading>
      <HStack spacing={0} mb={5}>
        <ColorTile hex="#3A8245" name="darkgreen" displayname="Dark Green" />
        <ColorTile hex="#65BF73" name="green" displayname="HF-HF Green" />
        <ColorTile hex="#FF9737" name="tangerine" displayname="Tangerine" />
        <ColorTile hex="#404040" name="charcoal" displayname="Charcoal Black" />
        <ColorTile hex="#6C6C6C" name="gray.mid" displayname="Mid Grey" />
        <ColorTile hex="#C4C4C4" name="gray.light" displayname="Light Grey" />
      </HStack>
      <HStack spacing={0} mb={10}>
        <Flex h={20} w={60} p={3} bg="black" dir="column">
          <Text textStyle="subheading1" color="white" mt="auto">
            #000000
          </Text>
        </Flex>
        <Flex h={20} w={60} p={3} bg="white" dir="column" border="1px solid black">
          <Text textStyle="subheading1" mt="auto">
            #FFFFFF
          </Text>
        </Flex>
      </HStack>

      <Heading textStyle="heading1" mb={5}>
        Typography
      </Heading>
      <VStack>
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
          <Button variant="secondary">Get Involved</Button>
          <Text textStyle="body1">Secondary</Text>
        </VStack>
      </HStack>
    </Layout>
  );
}

export default DemoPage;
