import React from 'react';

import { Box, Text, Stack, Center, Input, Button } from '@chakra-ui/react';

function Newsletter(): JSX.Element {
  const [value, setValue] = React.useState('');
  return (
    <>
      <Box h={75} bg="gray.light"></Box>
      <Box h={200} bg="gray.light">
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
    </>
  );
}

export default Newsletter;
