import React from 'react';
import {
  Image, Text, VStack, Heading, Card, CardHeader, CardFooter, CardBody, Stack, Button, Highlight, Flex, HStack, Box, Icon, Avatar
} from "@chakra-ui/react";
import Articles from "@/components/Articles";
import Goods from "@/components/Goods";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <VStack className='mb-10'>
        <Heading lineHeight="tall" fontSize={{base: "50", sm: "100"}} className='text-gray-700 w-[90%] md:w-[75%]'><span className='text-green-500'>Front-end</span> And UI Design</Heading>
        <Text className='text-gray-500 w-[90%] md:w-[75%]'>
        フロントエンドとUIデザインは、創造性と技術を融合させ、アイデアをインタラクティブで使いやすい体験に変えます。この分野は無限の革新があり、即座に目に見える成果をもたらします！
        </Text>
      </VStack>
      <VStack className='mb-10' textAlign="left" id='articles'>
        <Heading lineHeight="tall" className='text-gray-700 w-[90%] md:w-[75%]'>Articles on Zenn</Heading>
        <Articles slice="4" des="50" />
        <Link href="/writings" className='my-[5px] hover:underline text-gray-500'>See more...</Link>
      </VStack>
      <VStack className='mb-10' textAlign="right" id='products'>
        <Heading lineHeight="tall" className='text-gray-700 w-[90%] md:w-[75%]'>Goods</Heading>
        <Text className='text-gray-500 w-[90%] md:w-[75%]'>現在取り組んでいるプロジェクト</Text>
      </VStack>
      <Goods />
    </div>
  )
}