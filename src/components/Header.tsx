import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchFill,
  RiUserAddLine,
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      //   maxWidth={1120}
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text color="pink.500" as="span" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na Plataforma"
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchFill} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
        >
          <Icon as={RiNotificationLine} size="20" />
          <Icon as={RiUserAddLine} size="20" />
        </HStack>
      </Flex>

      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Queiroz Santana</Text>
          <Text color="gray.300" fontSize="small">
            queiroz.mahili@gmail.com
          </Text>
        </Box>

        <Avatar
          size="md"
          name="Queiroz Santana"
          src="https://github.com/qalintana.png"
        />
      </Flex>
    </Flex>
  );
}
