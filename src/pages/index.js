import React from 'react';
import {
  Image, Text, VStack, Heading, Card, CardHeader, CardFooter, CardBody, Stack, Button, Highlight, Flex, HStack, Box, Icon
} from "@chakra-ui/react";
import Articles from "@/components/Articles";
import Goods from "@/components/Goods";

export default function IndexPage() {
  return (
    <div>
      <VStack className='mb-10'>
        <Heading lineHeight="tall" fontSize={{base: "50", sm: "100"}} className='text-gray-700 w-[90%] md:w-[75%]'><span className='text-green-500'>Front-end</span> And UI Design</Heading>
        <Text className='text-gray-500 w-[90%] md:w-[75%]'>
        フロントエンドとUIデザインは、創造性と技術を融合させ、アイデアをインタラクティブで使いやすい体験に変えます。この分野は無限の革新があり、即座に目に見える成果をもたらします！
        </Text>
      </VStack>
      <VStack className='mb-10' textAlign="left">
        <Heading lineHeight="tall" className='text-gray-700 w-[90%] md:w-[75%]'>Articles on <span className='text-blue-500'>Zenn</span></Heading>
        <Articles />
      </VStack>
      <VStack className='mb-10' textAlign="right">
        <Heading lineHeight="tall" className='text-gray-700 w-[90%] md:w-[75%]'>Goods</Heading>
        <Text className='text-gray-500 w-[90%] md:w-[75%]'>現在取り組んでいるプロジェクト</Text>
      </VStack>
      <Goods />
    </div>
  )
}