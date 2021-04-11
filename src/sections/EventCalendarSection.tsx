import React, { useState } from 'react';

import {
  Box,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { format, isSameDay, parse } from 'date-fns';
import Calendar from 'src/components/calendar';
import EventModalCard from 'src/components/EventModalCard';
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
  {
    id: 3,
    title: 'Healthy Cooking Class 2',
    eventDate: 'Wednesday, April 24th',
    link: '#',
    description:
      'Bacon ipsum dolor amet meatloaf short ribs shank pork bresaola. Filet mignon frankfurter beef, buffalo pancetta brisket cupim pork chop turkey hamburger capicola chicken cow sausage. Ribeye bresaola burgdoggen beef ribs shank kielbasa chislic chuck tail ham hock pork jowl, pork belly meatball. Short ribs beef ribs turducken tenderloin sausage picanha boudin kielbasa andouille cow.',
  },
  {
    id: 4,
    title: 'Healthy Cooking Class 3',
    eventDate: 'Wednesday, April 24th',
    link: '#',
    description:
      'Bacon ipsum dolor amet meatloaf short ribs shank pork bresaola. Filet mignon frankfurter beef, buffalo pancetta brisket cupim pork chop turkey hamburger capicola chicken cow sausage. Ribeye bresaola burgdoggen beef ribs shank kielbasa chislic chuck tail ham hock pork jowl, pork belly meatball. Short ribs beef ribs turducken tenderloin sausage picanha boudin kielbasa andouille cow.',
  },
];

function EventCalendarSection(): JSX.Element {
  const [selectedEvents, setSelectedEvents] = useState<typeof events>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const events = TEMP_EVENTS.map(event => {
    return { ...event, eventDate: parse(event.eventDate, 'EEEE, MMMM do', new Date()) };
  });

  const openEventModal = (eventsToShow: typeof events) => {
    if (eventsToShow.length > 0) {
      setSelectedEvents(eventsToShow);
      onOpen();
    }
  };

  const openEventModalByDate = (selectedDate: Date) => {
    const eventsOnSelectedDate = events.filter(event => isSameDay(event.eventDate, selectedDate));
    openEventModal(eventsOnSelectedDate);
  };

  const openEventModalById = (eventId: number) => {
    const matchingEvents = events.filter(event => event.id == eventId);
    openEventModal(matchingEvents);
  };

  const closeEventModal = () => {
    setSelectedEvents([]);
    onClose();
  };

  const eventChips = events.map((e, i) => (
    <Box
      key={i}
      bg="green.500"
      borderRadius="5px"
      py={['10px', null, '2px']}
      px="8px"
      onClick={() => openEventModalById(e.id)}
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
            onDateClick={openEventModalByDate}
          />
        </Grid>
        <VStack spacing={5} gridArea="chips" mt={[0, null, '100px']}>
          {eventChips}
        </VStack>
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={closeEventModal} isCentered scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={5}>
            {selectedEvents.map(event => {
              return <EventModalCard event={event} key={event?.id} />;
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EventCalendarSection;
