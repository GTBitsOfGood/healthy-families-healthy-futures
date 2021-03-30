import React from 'react';

import { Box, Text, Stack, Center, Input, Button } from '@chakra-ui/react';

function NewsletterBanner(): JSX.Element {
  const [value, setValue] = React.useState('');
  return (
    <Box h={275} pt={75} bg="gray.extralight">
      <Text color="charcoal" textAlign={'center'} textStyle="heading2">
        Sign up for our newsletter!
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
          <Button variant="neutral">Subscribe</Button>
        </Stack>
      </Center>
    </Box>
  );
}

export default NewsletterBanner;
