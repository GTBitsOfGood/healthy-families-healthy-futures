import React, { useEffect, useState } from 'react';

import {
  Text,
  Stack,
  Center,
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Spinner,
  Link,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { useLocale } from 'src/contexts/LocaleContext';
import { Status, useMailChimp } from 'src/utils/useMailchimp';
import { validateEmail } from 'src/utils/util';

interface Props {
  data: GatsbyTypes.NewsletterBannerFragment;
}

function NewsletterBanner({ data }: Props): JSX.Element {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const { subscribe, status, error } = useMailChimp(process.env.MAILCHIMP_URL ?? '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setForm(form => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    subscribe({
      FNAME: form.firstName,
      LNAME: form.lastName,
      EMAIL: form.email,
    });
  };

  useEffect(() => {
    if (status === Status.SUCCESS) {
      window.dataLayer.push({ event: 'newsletter-signup' });
    }
  }, [status]);

  const validData =
    validateEmail(form.email) && form.firstName.length > 0 && form.lastName.length > 0;

  const { findLocale } = useLocale();
  const banner = findLocale(data.allContentfulNewsletterSection.nodes);
  let rightContent;
  let errorText;

  switch (status) {
    case Status.LOADING:
      rightContent = <Spinner />;
      break;
    case Status.SUCCESS:
      rightContent = <Text color="green.500">Thanks for signing up!</Text>;
      break;
    case Status.ERROR:
    case Status.IDLE:
      if (status === Status.ERROR) {
        if (typeof error === 'string' && error.includes('already subscribed')) {
          const match = /href="(.+)"/.exec(error);

          if (match == null) {
            errorText = (
              <Center>
                <Text color="red">There was an error. Please try again later.</Text>
              </Center>
            );
          } else {
            errorText = (
              <Flex flexDir="column" alignItems="center" maxW="400px">
                <Text textAlign="center" color="red">
                  This email is already signed up. Click this link to modify your email preferences:
                </Text>
                <Link href={match[1]} isExternal>
                  Click here
                </Link>
              </Flex>
            );
          }
        } else {
          errorText = (
            <Center>
              <Text color="red">There was an error. Please try again later.</Text>
            </Center>
          );
        }
      }

      rightContent = (
        <Stack spacing="20px">
          <Stack>
            <HStack>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input
                  variant="form"
                  onChange={handleInputChange}
                  value={form.firstName}
                  placeholder="First name"
                  name="firstName"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input
                  variant="form"
                  onChange={handleInputChange}
                  value={form.lastName}
                  placeholder="Last name"
                  name="lastName"
                />
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                variant="form"
                onChange={handleInputChange}
                value={form.email}
                placeholder="Email"
                name="email"
              />
            </FormControl>
          </Stack>
          <Center>
            <Button variant="neutral" type="submit" disabled={!validData} onClick={handleSubmit}>
              {banner?.ctaText}
            </Button>
          </Center>
          {errorText}
        </Stack>
      );
      break;
    default:
      break;
  }

  return (
    <Flex h={332} bg="gray.extralight" justifyContent="space-evenly" alignItems="center">
      <Text color="charcoal" textAlign={'center'} textStyle="heading2">
        {banner?.headline}
      </Text>
      {rightContent}
    </Flex>
  );
}

export default NewsletterBanner;

export const fragment = graphql`
  fragment NewsletterBanner on Query {
    allContentfulNewsletterSection {
      nodes {
        headline
        ctaLink
        ctaText
        node_locale
      }
    }
  }
`;
