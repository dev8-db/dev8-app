import React from 'react';;
import {
  Image, Text, VStack, Heading, Card, CardHeader, CardFooter, CardBody, Stack, Button
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Footer from "@/components/Footer";

export default function IndexPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('https://nook-dev.vercel.app/');
  };

  return (
    <div>
      <VStack className='mb-10 mr-[10px] ml-[10px] md:mr-5 md:ml-' textAlign="center">
        <Image src="/top.png" width={500} />
        <Text className='text-gray-500'>Combining front-end development with UI design allows you to create</Text>
        <Text className='text-gray-500'>seamless and engaging digital experiences that are both functional and beautiful!</Text>
      </VStack>
      <VStack className='mr-[10px] ml-[10px] md:mr-5 md:ml-' textAlign="center">
        <Heading className='mb-5'>Goods</Heading>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src="/trip.svg"
            padding="5"
          />
          <Stack>
            <CardBody>
              <Heading size='md'>Nook.dev</Heading>
              <Text py='2'>
                Byte-sized Chats, Mega-sized Ideas! Real time chat app!
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue' onClick={handleClick}>
                Try to use
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </VStack>
      <div className='mb-20' />
      <Footer />
    </div>
  )
}