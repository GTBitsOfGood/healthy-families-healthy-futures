import React from 'react';

import { BackgroundProps, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
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

      <HStack spacing={0}>
        <Flex h={20} w={60} p={3} bg="black">
          <Text textStyle="subheading1" color="white">
            #000000
          </Text>
        </Flex>
        <Flex></Flex>
      </HStack>
    </Layout>
  );
}

export default DemoPage;
