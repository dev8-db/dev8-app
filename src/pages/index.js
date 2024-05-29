import React from 'react';;
import {
  Image, Text, VStack, Heading, Card, CardHeader, CardFooter, CardBody, Stack, Button, Highlight, Flex
} from "@chakra-ui/react";
import Goods from "@/components/Goods";
import Footer from "@/components/Footer";

export default function IndexPage() {
  return (
    <div>
      {/* <VStack>
        <Flex
          bgGradient="linear(to-r, blue.300, green.300)"
          className='rounded-lg mb-5 w-[90%] md:w-[75%] h-[125px] md:h-[200px] items-center justify-center'
        />
      </VStack> */}
      <VStack textAlign="center">
        {/* <Heading>🐱🍡🐶</Heading> */}
        <Heading letterSpacing={5}>🧀🥪🍎</Heading>
      </VStack>
      <VStack className='mb-10'>
        <Heading lineHeight="tall" fontSize={{base: "50", sm: "100"}} className='text-gray-700 w-[90%] md:w-[75%]'><span className='text-green-500'>Front-end</span> And UI Design</Heading>
        <Text className='text-gray-500 w-[90%] md:w-[75%]'>Front-end and UI design merge creativity with technology, transforming ideas into interactive, user-friendly experiences. It's a field of endless innovation and immediate, visible results!</Text>
      </VStack>
      <VStack className='mb-10' textAlign="right">
        <Heading lineHeight="tall" className='text-gray-700 w-[90%] md:w-[75%]'>Goods</Heading>
        <Text className='text-gray-500 w-[90%] md:w-[75%]'>The project I am currently focusing on:</Text>
      </VStack>
      <Goods />
    </div>
  )
}