import React from 'react';

import { Box, Heading } from '@chakra-ui/react';

interface Props {
  title: string;
}

const BasicBanner = ({ title }: Props) => {
  return (
    <Box minH={560} display="flex" flexDirection="column" justifyContent="center">
      <Box bg="creamsicle" p={[5, null, 10]} marginLeft={[5, null, 20]} width={[350, null, 480]}>
        <Heading textAlign="center" textTransform="uppercase">
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default BasicBanner;
