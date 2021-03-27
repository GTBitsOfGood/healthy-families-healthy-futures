import React from 'react';

import { Box, Text, Stack, Center, Input, Button } from '@chakra-ui/react';

function Newsletter(): JSX.Element {
  const [value, setValue] = React.useState('');
  return (
    <Box h={275} pt={75} bg="gray.extralight">
      <Text color="charcoal" textAlign={'center'} textStyle="heading2">
        Sign up for our newsletter!
      </Text>
      <Stack direction="row" marginLeft="40%" marginTop={30}>
        <Center>
          <Input borderColor="black" borderRadius="none" marginRight={3} value={value} />
          <Button variant="neutral" fontSize="16px">
            Subscribe
          </Button>
        </Center>
      </Stack>
    </Box>
  );
}

export default Newsletter;
