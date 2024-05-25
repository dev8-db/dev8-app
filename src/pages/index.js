import { Button, ButtonGroup } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Stack, HStack, VStack, StackDivider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useTab } from '@chakra-ui/react';
import { useMultiStyleConfig } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea
} from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import {
  Flex,
  Avatar,
  IconButton,
  Image
} from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react';
import { LinkBox, LinkOverlay, Tag } from '@chakra-ui/react';

export default function IndexPage() {
  const CustomTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as='span' className='sm:mr-[5px]'>
          {isSelected ? '😎' : '😐'}
        </Box>
        {tabProps.children}
      </Button>
    )
  })

  return (
    <div>
                  <VStack className='mb-5'><Heading>About me</Heading></VStack>
            <Flex justify="center" align="center">
            <Box
                p={8}
                bg="white"
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                width="100%"
                maxW="4xl"
                mx={5}
            >
                <Flex direction={{ base: "column", md: "row" }} align="center" justify="center">
                <Image
                    borderRadius="full"
                    boxSize={{ base: "150px", md: "200px" }}
                    src="/dog.svg"
                    alt="Profile Picture"
                />
                <VStack align="start" spacing={4} flex="1" ml={{ base: 0, md: 8 }}>
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                    dev8
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                    <Tag className='mr-[5px] md:mb-0 mb-[5px]'>Front End Developer</Tag><Tag>Student</Tag>
                    </Text>
                    <Divider />
                    <Box width="100%">
                    <HStack justify="space-between">
                        <Text fontSize="sm" color="gray.500">Location</Text>
                        <Text fontSize="sm" color="gray.900">Hokkaido, Japan</Text>
                    </HStack>
                    <HStack justify="space-between" mt={2}>
                        <Text fontSize="sm" color="gray.500">Twitter</Text>
                        <Link href="https://x.com/develop8_studio" fontSize="sm" color="gray.900" isExternal>
                        @develop8_studio
                        </Link>
                    </HStack>
                    </Box>
                </VStack>
                </Flex>
            </Box>
            </Flex>
    </div>
  )
}