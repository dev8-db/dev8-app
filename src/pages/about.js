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
  Stack,
  Icon
} from "@chakra-ui/react";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About me -Develop8 Studio</title>
      </Head>
      <VStack className='mb-5'><Heading className="text-gray-700">About me</Heading></VStack>
      <VStack><Image src="/dog.svg" className="rounded-full w-40" /></VStack>
      <About />
    </div>
  )
}