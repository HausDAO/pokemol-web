import React, { useEffect, useState } from 'react';

import { Flex, Box, Image } from '@chakra-ui/react';

const VaultCardTokenList = ({ tokens }) => {
  const [formattedTokenData, setFormattedTokenData] = useState({
    tokensWithIcons: [],
    leftoverCount: 0,
  });

  useEffect(() => {
    if (tokens) {
      const tokensWithIcons = tokens.reduce((icons, token) => {
        if (icons.length < 3 && token.icon) {
          icons.push(token);
        }
        return icons;
      }, []);
      setFormattedTokenData({
        tokensWithIcons,
        leftoverCount: tokens.length - tokensWithIcons.length,
      });
    }
  }, [tokens]);

  const renderTokenIcon = (token, i) => {
    return (
      <Flex key={i} align='center'>
        <Image src={token.icon} height='35px' mr='15px' />
      </Flex>
    );
  };

  return (
    <Flex direction='row' alignItems='center'>
      {formattedTokenData.tokensWithIcons.map((token, i) => {
        return renderTokenIcon(token, i);
      })}

      {formattedTokenData.leftoverCount > 0 && (
        <Box fontSize='sm' mr={3}>
          {`${formattedTokenData.tokensWithIcons.length > 0 ? '+' : ''} ${
            formattedTokenData.leftoverCount
          } token${formattedTokenData.leftoverCount > 1 ? 's' : ''}`}
        </Box>
      )}
    </Flex>
  );
};

export default VaultCardTokenList;