import Head from "next/head";
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import {
  Flex,
  Image
} from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react';
import { Tag, HStack } from '@chakra-ui/react';

export default function About() {
  return (
    <div>
      <Head>
        <title>About me -Develop8 Studio</title>
      </Head>
      <VStack className='mb-5'><Heading className="text-gray-700">About me</Heading></VStack>
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
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">dev8</Text>
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