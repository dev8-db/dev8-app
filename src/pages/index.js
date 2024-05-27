import React from 'react';;
import {
  Image, Text, VStack, Heading, Card, CardHeader, CardFooter, CardBody, Stack, Button, Highlight
} from "@chakra-ui/react";
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('https://nook-dev.vercel.app');
  };

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
      <VStack className='mr-[10px] ml-[10px] md:mr-0 md:ml-0' textAlign="left">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          height={{ base: 'auto', sm: '175px' }}
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '175px' }}
            src="/goods/nook.png"
            padding="5"
            className='h-60 md:h-[100%]'
          />
          <Stack>
            <CardBody>
              <Heading size='md' className='text-gray-700'>Nook.dev</Heading>
              <Text py='2' className='text-gray-500 w-[90%] md:w-[750px]'>
                I&apos;m working on a real-time chat app with the theme &apos;Byte-sized Chats, Mega-sized Ideas!&apos; My aim? To make chatting smooth and fun! Right now, I&apos;ve added image sharing and stickers! 🚀
              </Text>
              <Button variant='solid' colorScheme='green' onClick={handleClick} marginTop="5px">
                Try to use
              </Button>
            </CardBody>
          </Stack>
        </Card>
      </VStack>
    </div>
  )
}