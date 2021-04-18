/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from 'react';

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
import { format, isSameDay } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import { graphql } from 'gatsby';
import Calendar from 'src/components/calendar';
import EventModalCard from 'src/components/EventModalCard';
import SectionHeader from 'src/components/SectionHeader';
import { Event } from 'src/utils/types';

interface Props {
  data: GatsbyTypes.EventCalendarSectionFragment;
}

function EventCalendarSection({ data }: Props): JSX.Element {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const shouldShowFacebookEvents = data?.contentfulEventSourceConfig?.getFromFacebook ?? false;

  useEffect(() => {
    if (!shouldShowFacebookEvents) return;
    void (async () => {
      const res = await fetch(
        `https://graph.facebook.com/v10.0/232144604765679/events?access_token=${
          process.env.FB_PAGE_AUTH_TOKEN ?? ''
        }`,
      );
      const { unparsed } = await res.json();
      const parsed = unparsed.map((e: { start_time: string; end_time: string }) => ({
        ...e,
        start_time: parseISO(e.start_time),
        end_time: parseISO(e.end_time),
      }));
      setEvents(parsed);
    })();
  }, [shouldShowFacebookEvents]);

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
      {e.name} - {format(e.start_time, 'M/dd/yyyy')}
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

export const fragment = graphql`
  fragment EventCalendarSection on Query {
    contentfulEventSourceConfig {
      getFromFacebook
    }
  }
`;
