import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, VStack, HStack, Text, Button } from '@chakra-ui/react';

function OurWork(): JSX.Element {
  return (
    <>
      <Box h={900} bg="gray.light">
        <HStack marginBottom={170}>
          <Box w={500}>
            <Text textAlign={'center'} textStyle="heading1">
              OUR WORK
            </Text>
          </Box>
          <Box bg="creamsicle" w="100%" p={8}></Box>
        </HStack>

        <HStack marginLeft="10%" marginRight="10%">
          <Box boxShadow="lg" w={499} h={468} marginRight={127} bg="white">
            <VStack>
              <Box w={312} h={246}>
                <img src="Chef.png" alt="chef"></img>
              </Box>
              <Text fontWeight="light" color="charcoal" textAlign={'center'} textStyle="heading2">
                CLASSES & EVENTS
              </Text>
              <Box w={365}>
                <Text textAlign={'center'} textStyle="subheading1" fontSize="18px">
                  HF-HF provides classes and workshops to help promote healthy eating habits and
                  activities, run by our volunteers.
                </Text>
              </Box>
            </VStack>
            <Box marginTop={33} marginLeft={298}>
              <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
                LEARN MORE
              </Button>
            </Box>
          </Box>
          <Box boxShadow="lg" w={499} h={468} bg="white">
            <VStack>
              <Box w={312} h={246}>
                <img src="Card_Image.png" alt="card"></img>
              </Box>
              <Text color="charcoal" textAlign={'center'} textStyle="heading2">
                NUTRITIONAL RESOURCES
              </Text>
              <Box w={365}>
                <Text textAlign={'center'} textStyle="subheading1" fontSize="18px">
                  Aside from recipes, HF-HF provides assortment of useful links and resources to
                  help promote healthy eating and activities.
                </Text>
              </Box>
            </VStack>
            <Box marginTop={33} marginLeft={298}>
              <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
                LEARN MORE
              </Button>
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  );
}

export default OurWork;
