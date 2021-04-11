import React from 'react';

import { CloseButton } from '@chakra-ui/close-button';
import { AspectRatio, Box } from '@chakra-ui/layout';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/modal';
import Img from 'gatsby-image';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  media: GatsbyTypes.GatsbyContentfulFluidFragment | string;
}

function MediaModal({ isOpen, onClose, media }: Props): JSX.Element {
  let mediaComponent = <Box />;
  if (typeof media === 'string') {
    mediaComponent = (
      <AspectRatio>
        <iframe title="Resource media" src={media} allowFullScreen />
      </AspectRatio>
    );
  } else {
    mediaComponent = <Img fluid={media} />;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="xl">
      <ModalOverlay>
        <CloseButton pos="absolute" top="3" right="3" size="lg" color="white"></CloseButton>
      </ModalOverlay>
      <ModalContent>{mediaComponent}</ModalContent>
    </Modal>
  );
}

export default MediaModal;
