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
  Tfoot,
  Code,
  Stack
} from "@chakra-ui/react";

export default function About() {
  return (
    <div>
      <Head>
        <title>About me -Develop8 Studio</title>
      </Head>
      <VStack className='mb-5'><Heading className="text-gray-700">About me</Heading></VStack>
      <VStack className='mb-5'>
        <Image src="/dog.svg" className="rounded-full w-20 h-20" />
        <Text className="w-[80%] md:w-[50%] text-gray-500" lineHeight="tall">フロントエンドを中心とした開発を行っている中学生です。好きなフレームワークはNext.jsです。趣味は読書と音楽を聴くことです。</Text>
      </VStack>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
          <Tr>
              <Td className="text-gray-500">Name</Td>
              <Td><Code>Develop8</Code></Td>
            </Tr>
            <Tr>
              <Td className="text-gray-500">Location</Td>
              <Td><Code>Hokkaido, Japan</Code></Td>
            </Tr>
            <Tr>
              <Td className="text-gray-500">Things I love</Td>
              <Td><Code>Front-end, Reading, Listening to music</Code></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}