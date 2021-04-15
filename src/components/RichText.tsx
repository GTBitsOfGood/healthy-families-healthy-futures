import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { Box, Heading, HStack, Link, Text, VStack, Center } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Block, BLOCKS, INLINES } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

/**
 * Not sure why the given types are missing this value, but here we go
 */
interface ExtraBlock extends Block {
  value: string;
}
interface Props {
  data: GatsbyTypes.BlogBodyFragment;
}

function RichText({ data }: Props): JSX.Element {
  const quoteRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  let quoteIdx = 0;
  const body = data.body2;

  const [, forceRefresh] = useState(false);
  useEffect(() => {
    forceRefresh(true);
  }, []);

  if (body?.raw == null) {
    return <></>;
  }

  const options: Parameters<typeof documentToReactComponents>[1] = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Heading textStyle="heading1">{children}</Heading>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading textStyle="heading2">{children}</Heading>,
      [BLOCKS.HEADING_3]: (node, children) => (
        <Text w="full" textStyle="caption" textAlign="center" mt="32px">
          {children}
        </Text>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (children == null) {
          return null;
        }
        if ((children as (string | ReactNode)[]).some(v => typeof v === 'object')) {
          return <>{children as string | ReactNode[]}</>;
        }
        return (
          <>
            {(children as string[])[0].split('\n').map((paragraph, i) => {
              if (paragraph.trim().length === 0) return null;
              return (
                <Text textStyle="body1" key={i} mt={i !== 0 ? '28px' : 0}>
                  {paragraph}
                </Text>
              );
            })}
          </>
        );
      },
      [BLOCKS.QUOTE]: node => {
        const currQuoteIdx = quoteIdx++;
        const barHeight = quoteRefs.current[currQuoteIdx]?.clientHeight;
        return (
          <HStack spacing="20px" h="full">
            <Box w="2px" h={barHeight != null ? `${barHeight}px` : 'full'} bg="creamsicle" />
            <Text
              ref={el =>
                el != null &&
                quoteRefs.current.length - 1 < currQuoteIdx &&
                quoteRefs.current.push(el)
              }
              style={{ fontStyle: 'italic' }}
            >
              {((node.content[0] as Block).content[0] as ExtraBlock).value}
            </Text>
          </HStack>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,  @typescript-eslint/no-unsafe-assignment
        const assetId: string = node.data.target.sys.id;
        const currFluid = body?.references?.find(
          ref => ref != null && ref.contentful_id === assetId,
        )?.fluid;

        if (currFluid != null) {
          return (
            <Center w="full">
              <Img
                fluid={currFluid}
                style={{ maxHeight: '500px', width: '740px' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </Center>
          );
        }
        return <Text>Image error!</Text>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const text = (children as string[])[0];
        const url = node.data.uri as string;

        if (url.toLowerCase().includes('www.facebook.com/plugins')) {
          return (
            <Center w="full">
              <iframe
                title="embed video"
                src={url}
                width="476"
                height="476"
                style={{ border: 'none' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </Center>
          );
        }

        if (
          url.toLowerCase().includes('www.youtube.com/embed') ||
          url.toLowerCase().includes('www.youtube-nocookie.com/embed')
        ) {
          return (
            <Center w="full">
              <iframe
                width="560"
                height="315"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Center>
          );
        }

        return (
          <Link href={url} variant="blog" isExternal>
            {text}
          </Link>
        );
      },
    },
  };

  const component = documentToReactComponents(JSON.parse(body?.raw ?? ''), options);
  return (
    <VStack alignItems="start" spacing="35px">
      {component}
    </VStack>
  );
}

export default RichText;

export const fragment = graphql`
  fragment BlogBody on ContentfulBlogPost {
    body2 {
      raw
      references {
        contentful_id
        fluid(maxWidth: 1180) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
