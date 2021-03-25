import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Icon, Image, Box, useToast } from '@chakra-ui/react';
import { RiLoginBoxLine } from 'react-icons/ri';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { UBERHAUS_ADDRESS, UBERHAUS_NETWORK } from '../utils/uberhaus';
import DAOHaus from '../assets/img/Daohaus__Castle--Dark.svg';
import { FaCopy } from 'react-icons/fa';

const UberHausAvatar = ({ enableCopy = true, enableLink = true }) => {
  const toast = useToast();
  return (
    <Flex alignItems='center'>
      <Image src={DAOHaus} w='40px' h='40px' mr={4} />
      <Box fontFamily='heading' fontSize='sm' fontWeight={900} mr={4}>
        UberHAUS
      </Box>
      <Flex alignItems='center' transform='translateY(-3px)'>
        {enableCopy && (
          <CopyToClipboard
            text={UBERHAUS_ADDRESS}
            mr={2}
            onCopy={() =>
              toast({
                title: 'Copied Address',
                position: 'top-right',
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            }
          >
            <Icon
              transform='translateY(2px)'
              as={FaCopy}
              color='secondary.300'
              mr={3}
              _hover={{ cursor: 'pointer' }}
            />
          </CopyToClipboard>
        )}
        {enableLink && (
          <RouterLink to={`/dao/${UBERHAUS_NETWORK}/${UBERHAUS_ADDRESS}`}>
            <Icon as={RiLoginBoxLine} color='secondary.500' h='20px' w='20px' />
          </RouterLink>
        )}
      </Flex>
    </Flex>
  );
};

export default UberHausAvatar;