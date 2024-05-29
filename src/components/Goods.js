import { VStack, Card, Stack, CardBody, Heading, Text, Button, Image, CardFooter } from "@chakra-ui/react";
import { useRouter } from 'next/router';

export default function Goods() {
    const router = useRouter();

    const handleClick = () => {
        router.push('https://nook-dev.vercel.app');
    };

    return (
        <VStack textAlign="left" spacing={5}>
        <Card
            direction={{ base: 'column', md: 'row' }}
            variant='outline'
            shadow="sm"
            className="w-[90%] md:w-[75%] overflow-hidden"
            >
            <Image
                objectFit='cover'
                src="/goods/nook.png"
                className='md:w-[30%] lg:w-[20%]'
            />
            <CardBody>
                <Heading size='md' className='text-gray-700'>Nook.dev</Heading>
                <Text className='text-gray-500 w-fit-content py-2.5'>
                        I&apos;m working on a real-time chat app with the theme &apos;Byte-sized Chats, Mega-sized Ideas!&apos; My aim? To make chatting smooth and fun! Right now, I&apos;ve added image sharing and stickers! 🚀
                </Text>
                <Button variant='solid' colorScheme='green' onClick={handleClick} className="mt-5">Try to use</Button>
            </CardBody>
        </Card>
        </VStack>
    )
}