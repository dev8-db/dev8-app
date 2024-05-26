import { Box } from '@chakra-ui/react';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Stack, HStack, VStack, StackDivider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import {
  Flex,
  Avatar,
  IconButton,
  Image
} from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react';
import { LinkBox, LinkOverlay, Tag, SimpleGrid } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { Code, Link } from '@chakra-ui/react';

export default function IndexPage() {
  return (
    <div>
      <VStack className='mb-5 mr-[10px] ml-[10px] md:mr-5 md:ml-'>
        <Image src="/top.png" width={500} />
        <Text className='text-gray-500'>Combining front-end development with UI design allows you to create</Text>
        <Text className='text-gray-500'>seamless and engaging digital experiences that are both functional and beautiful!</Text>
      </VStack>
      <div className='mr-[10px] ml-[10px] md:mr-5 md:ml-5'>
      </div>
    </div>
  )
}