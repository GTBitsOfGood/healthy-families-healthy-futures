import React, { ReactNode, useEffect, useRef, useState } from 'react';

import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Image,
  useBreakpointValue,
  Center,
  Skeleton,
} from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Block, BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import client from 'src/utils/contentful';
import { Asset } from 'contentful';

/**
 * Not sure why the given types are missing this value, but here we go
 */
interface ExtraBlock extends Block {
  value: string;
}
interface Props {
  data?: string;
}

function RichText({ data }: Props): JSX.Element {
  const quoteRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  let quoteIdx = 0;
  const imageWidth = useBreakpointValue({ base: 700, md: 800 }) ?? 800;

  const [, forceRefresh] = useState(false);
  const assets = useRef<{ [id: string]: Asset | null }>({});
  useEffect(() => {
    void (async () => {
      const { items } = await fetchImages(Object.keys(assets.current));
      for (const id in assets.current) {
        const curr = items.find(item => item.sys.id === id);
        if (curr != null) {
          assets.current[id] = curr;
        }
      }
      forceRefresh(true);
    })();
  }, []);

  const [loaded, setLoaded] = useState<string[]>([]);

  const fetchImages = async (assetIds: string[]) => {
    const response = await client.getAssets({
      'sys.id[in]': `${assetIds.join(',')}`,
    });
    return response;
  };

  if (data == null) {
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
      [BLOCKS.QUOTE]: (node, children) => {
        const currQuoteIdx = quoteIdx++;
        const barHeight = quoteRefs.current[currQuoteIdx]?.clientHeight;
        console.log(quoteRefs.current);
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
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,  @typescript-eslint/no-unsafe-assignment
        const assetId: string = node.data.target.sys.id;
        const asset = assets.current[assetId];
        if (asset == null) {
          assets.current[assetId] = null;
          return (
            <Skeleton h="500px" w="full">
              Image here!
            </Skeleton>
          );
        } else {
          return (
            <Skeleton isLoaded={loaded.includes(assetId)} h="500px" w="full">
              <Center w="full">
                <Box maxH="500px">
                  <Image
                    onLoad={e => {
                      console.log(`loaded ${assetId}`);
                      setLoaded(prevLoaded => [...prevLoaded, assetId]);
                    }}
                    maxH="inherit"
                    maxW="100%"
                    objectFit="contain"
                    src={`${asset.fields.file.url}?fm=jpg&fl=progressive&h=${Math.floor(
                      (imageWidth * 2) / 3,
                    )}&w=${imageWidth}`}
                  />
                </Box>
              </Center>
            </Skeleton>
          );
        }
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Link href={(node.data.uri as string) ?? '#'} variant="blog" isExternal>
            {(children as string[])[0]}
          </Link>
        );
      },
    },
  };

  const component = documentToReactComponents(JSON.parse(data), options);
  return (
    <VStack alignItems="start" spacing="35px">
      {component}
    </VStack>
  );
}

export default RichText;
