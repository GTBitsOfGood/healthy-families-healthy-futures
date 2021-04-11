import React, { useState } from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';
import { format, isSameDay, parse } from 'date-fns';
import Calendar from 'src/components/calendar';
import SectionHeader from 'src/components/SectionHeader';

const TEMP_EVENTS = [
  {
    id: 1,
    title: 'Healthy Cooking Class',
    eventDate: 'Wednesday, April 17th',
    link: '#',
    description:
      'Spicy jalapeno bacon ipsum dolor amet jowl bresaola cow flank burgdoggen tail pancetta tenderloin corned beef. Landjaeger beef ribs tri-tip biltong andouille cow spare ribs. Ribeye jerky jowl ground round alcatra beef. Sausage biltong shankle, bresaola ribeye bacon pancetta cupim meatball shoulder andouille turkey strip steak salami. Ribeye leberkas prosciutto, pork loin ground round corned beef short ribs landjaeger brisket pork belly. Rump meatloaf salami, prosciutto boudin pork hamburger ground round bresaola frankfurter biltong.',
  },
  {
    id: 2,
    title: 'Healthy Cooking Class',
    eventDate: 'Wednesday, April 24th',
    link: '#',
    description:
      'Sausage leberkas tenderloin pancetta andouille short ribs venison pork belly drumstick cow ribeye pastrami. Short loin kielbasa ribeye spare ribs short ribs. Shankle chislic landjaeger shank. Chicken meatloaf hamburger alcatra shank.',
  },
];

function EventCalendarSection(): JSX.Element {
  const [currentEvent, setCurrentEvent] = useState<typeof events[0] | null>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const events = TEMP_EVENTS.map(event => {
    return { ...event, eventDate: parse(event.eventDate, 'EEEE, MMMM do', new Date()) };
  });

  const openEventModal = (selectedDate: Date) => {
    const eventsOnSelectedDate = events.filter(event => isSameDay(event.eventDate, selectedDate));
    if (eventsOnSelectedDate.length > 0) {
      setCurrentEvent(eventsOnSelectedDate[0]);
      onOpen();
    }
  };

  const closeEventModal = () => {
    setCurrentEvent(null);
    onClose();
  };

  const eventChips = events.map((e, i) => (
    <Box
      key={i}
      bg="green.500"
      borderRadius="5px"
      py={['10px', null, '2px']}
      px="8px"
      onClick={() => openEventModal(e.eventDate)}
      cursor="pointer"
      w="100%"
    >
      {e.title} - {format(e.eventDate, 'M/dd/yyyy')}
    </Box>
  ));

  return (
    <Box pb="160px">
      <Box marginBottom={50}>
        <SectionHeader text="Calendar" textPosition="right" />
      </Box>
      <SimpleGrid
        mx="40px"
        gridColumnGap="40px"
        gridTemplateAreas={[`"calendar"\n"chips"`, null, `"calendar chips"`]}
        gridTemplateColumns={['1fr', null, '1fr 250px']}
      >
        <Grid ml={[0, null, '50px']} gridArea="calendar">
          <Calendar
            eventDates={events.map(event => event.eventDate)}
            onDateClick={openEventModal}
          />
        </Grid>
        <VStack spacing={5} gridArea="chips" mt={[0, null, '100px']}>
          {eventChips}
        </VStack>
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={closeEventModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={5}>
            <Text textStyle="heading2">{currentEvent?.title}</Text>
            <Text textStyle="subheading1">
              {currentEvent?.eventDate && format(currentEvent?.eventDate, 'EEEE, d MMMM')}
            </Text>
            <Text my={5}>{currentEvent?.description}</Text>
          </ModalBody>

          <ModalFooter>
            <Link to={currentEvent?.link}>
              <Text textAlign="right" _hover={{ color: '#65BF73' }} textTransform="uppercase">
                Learn more <ArrowForwardIcon />
              </Text>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EventCalendarSection;
