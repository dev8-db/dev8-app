import React from 'react';;
import {
  Image, Text, VStack, Heading, Card, CardHeader, CardFooter, CardBody, Stack, Button, Highlight
} from "@chakra-ui/react";
import Goods from "@/components/Goods";
import Footer from "@/components/Footer";

export default function IndexPage() {
  return (
    <div>
      <VStack className='mr-[10px] ml-[10px] md:mr-0 md:ml-0' textAlign="center">
        <Heading>🐱🍡🐶</Heading>
      </VStack>
      <VStack className='mb-10 mr-[10px] ml-[10px] md:mr-0 md:ml-0'>
        <Heading lineHeight="tall" className='text-gray-700 w-[90%] md:w-[750px]'>Front-end And UI Design</Heading>
        <Text className='text-gray-500 w-[90%] md:w-[750px]'>Front-end and UI design merge creativity with technology, transforming ideas into interactive, user-friendly experiences. It's a field of endless innovation and immediate, visible results!</Text>
      </VStack>
      <VStack className='mb-10 mr-[10px] ml-[10px] md:mr-5 md:ml-' textAlign="right">
        <Heading lineHeight="tall" className='text-gray-700 w-[90%] md:w-[750px]'>Goods</Heading>
        <Text className='text-gray-500 w-[90%] md:w-[750px]'>The project I am currently focusing on:</Text>
      </VStack>
      <Goods />
    </div>
  )
}