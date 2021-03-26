import React from 'react';

//import { Box, Container, Divider, Heading, Text } from '@chakra-ui/react';
import { PageProps } from 'gatsby';

import Layout from '../components/Layout';

type Props = PageProps;

function AboutPage(props: Props): JSX.Element {
  return <Layout location={props.location}> </Layout>;
}

export default AboutPage;
