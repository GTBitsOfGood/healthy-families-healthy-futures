import React from 'react';

import { Box, Heading, Text, Stack, Button, Image, Flex, Center } from '@chakra-ui/react';

function DonateSection(): JSX.Element {
  return (
    <Flex>
      <Box w="40%" h={480}>
        <Image
          boxSize="480px"
          w="full"
          objectFit="cover"
          src="donationBanner.png"
          alt="donation_banner"
        />
      </Box>
      <Center flex="1" h={480} bg="creamsicle">
        <Box w={183} h={158}>
          <img src="whiteLogo.png" alt=""></img>
        </Box>
        <Stack spacing={5} marginLeft={55} direction="column">
          <Heading textAlign="left" textStyle="heading1" color="charcoal">
            Help Us Grow
          </Heading>
          <Box w={320}>
            <Text textAlign="left" textStyle="body1">
              Even small contributions can help us continue our work to provide nutritional
              education.
            </Text>
          </Box>
          <Box>
            <Button variant="primary">Donate</Button>
          </Box>
        </Stack>
      </Center>
    </Flex>
  );
}

export default DonateSection;
