import { VStack, Card, Stack, CardBody, Heading, Text, Button, Image } from "@chakra-ui/react";
import { useRouter } from 'next/router';

export default function Goods() {
    const router = useRouter();

    const handleClick = () => {
        router.push('https://nook-dev.vercel.app');
    };

    return (
        <VStack className='mr-[10px] ml-[10px] md:mr-0 md:ml-0' textAlign="left" spacing={5}>
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
    )
}