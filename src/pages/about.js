import Head from "next/head";
import React from 'react';
import {
  Flex,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Divider,
  Tag,
  HStack,
  Text,
  VStack,
  Heading,
  Box,
  Link,
  TableCaption,
  Tfoot
} from "@chakra-ui/react";

export default function About() {
  return (
    <div>
      <Head>
        <title>About me -Develop8 Studio</title>
      </Head>
      <VStack className='mb-5'><Heading className="text-gray-700">About me</Heading></VStack>
      <VStack className='mb-5'><Image src="/dog.svg" className="rounded-full w-20 h-20" /></VStack>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
          <Tr>
              <Td className="text-gray-500">Name</Td>
              <Td>Develop8</Td>
            </Tr>
            <Tr>
              <Td className="text-gray-500">Location</Td>
              <Td>Hokkaido, Japan</Td>
            </Tr>
            <Tr>
              <Td className="text-gray-500">Things I love</Td>
              <Td>Front-end, Reading, Listening to music</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}