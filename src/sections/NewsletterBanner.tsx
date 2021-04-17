import React, { useRef, useState } from 'react';

import { Box, Text, Stack, Center, Input, Button } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { useLocale } from 'src/contexts/LocaleContext';
import { validateEmail } from 'src/utils/util';

interface Props {
  data: GatsbyTypes.NewsletterBannerFragment;
}

function NewsletterBanner({ data }: Props): JSX.Element {
  const [email, setEmail] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const { findLocale } = useLocale();
  const banner = findLocale(data.allContentfulNewsletterSection.nodes);

  return (
    <Box h={275} pt={75} bg="gray.extralight">
      <Text color="charcoal" textAlign={'center'} textStyle="heading2">
        {banner?.headline}
      </Text>
      <Center>
        <form
          action="//mc.us17.list-manage.com/signup-form/subscribe?u=035989d48b7aeb1260f8b2efb&amp;id=00e96fe1f0"
          acceptCharset="UTF-8"
          method="post"
          encType="multipart/form-data"
          target="_blank"
          onSubmit={e => {
            e.preventDefault();
            console.log(e);
            if (formRef.current) {
              const formData = new FormData(formRef.current);
              void fetch(
                '//mc.us17.list-manage.com/signup-form/subscribe?u=035989d48b7aeb1260f8b2efb&amp;id=00e96fe1f0',
                {
                  method: 'POST',
                  body: formData,
                  // referrerPolicy: 'strict-origin-when-cross-origin',
                  mode: 'no-cors',
                  // mode: 'cors',
                  // credentials: 'omit',
                  // headers: {
                  // accept: '*/*',
                  // 'accept-language': 'en-US,en;q=0.9',
                  // 'cache-control': 'no-cache',
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                  // },
                },
              ).then(res => console.log(res));
              console.log(formData);
            }
          }}
          ref={formRef}
        >
          <Stack direction="row" spacing={4} marginTop={30}>
            <Input
              h="40px"
              borderColor="black"
              borderRadius="none"
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              name="EMAIL"
              id="mc-EMAIL"
            />
            <input type="hidden" name="b_035989d48b7aeb1260f8b2efb_227062" value="" />
            <input
              type="hidden"
              name="c"
              value="dojo_request_script_callbacks.dojo_request_script3"
            />
            <input
              type="hidden"
              name="ht"
              value="1f6c7519f9c391763bbf0569e6ab285077af9eb7:MTYxODYyOTQ3MC43MzY2"
            />
            <Button variant="neutral" type="submit" disabled={!validateEmail(email)}>
              {banner?.ctaText}
            </Button>
          </Stack>
        </form>
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
