import React from 'react';

import { Box, Text, Stack, Center, Input, Button, LinkOverlay, LinkBox } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.NewsletterBannerFragment;
}

function NewsletterBanner({ data }: Props): JSX.Element {
  const [value, setValue] = React.useState('');

  const { findLocale } = useLocale();
  const banner = findLocale(data.allContentfulNewsletterSection.nodes);

  return (
    <Box h={275} pt={75} bg="gray.extralight">
      <Text color="charcoal" textAlign={'center'} textStyle="heading2">
        {banner?.headline}
      </Text>
      <Center>
        <Stack direction="row" spacing={4} marginTop={30}>
          <Input
            h="40px"
            borderColor="black"
            borderRadius="none"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <LinkBox>
            <LinkOverlay href={banner?.ctaLink ?? '#'}>
              <Button variant="neutral">{banner?.ctaText}</Button>
            </LinkOverlay>
          </LinkBox>
        </Stack>
      </Center>
    </Box>
  );
}

export default NewsletterBanner;

export const fragment = graphql`
  fragment NewsletterBanner on Query {
    allContentfulNewsletterSection {
      nodes {
        headline
        ctaLink
        ctaText
        node_locale
      }
    }
  }
`;
