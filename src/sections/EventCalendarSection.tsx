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
import { isSameDay } from 'date-fns';
import Calendar from 'src/components/calendar';
import EventModalCard from 'src/components/EventModalCard';
import SectionHeader from 'src/components/SectionHeader';
import { useLocale } from 'src/contexts/LocaleContext';
import { Event } from 'src/utils/types';

interface Props {
  events: Event[];
}

function EventCalendarSection({ events }: Props): JSX.Element {
  const { formatLocale } = useLocale();
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openEventModal = (eventsToShow: typeof events) => {
    if (eventsToShow.length > 0) {
      setSelectedEvents(eventsToShow);
      onOpen();
    }
  };

  const openEventModalByDate = (selectedDate: Date) => {
    const eventsOnSelectedDate = events.filter(event => isSameDay(event.start_time, selectedDate));
    openEventModal(eventsOnSelectedDate);
  };

  const openEventModalById = (eventId: string) => {
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
      {e.name} - {formatLocale(e.start_time, 'M/dd/yyyy')}
    </Box>
  ));

  return (
    <Box pb={{ base: '65px', md: 0 }}>
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
            eventDates={events.map(event => event.start_time)}
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
