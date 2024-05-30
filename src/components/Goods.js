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
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                className="w-[90%] md:w-[75%]"
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='/goods/odan-chat.jpg'
                    alt='Caffe Latte'
                />
                <Stack>
                    <CardBody>
                    <Heading size='md'>Nook.dev</Heading>

                    <Text py='2' className="text-gray-500">
                    "Byte-sized Chats, Mega-sized Ideas!"というテーマでリアルタイムチャットアプリを開発しています！私の目標は、チャットをスムーズで楽しくすることです！現在、画像の共有とステッカー機能を追加しました！🚀
                    </Text>
                    </CardBody>

                    <CardFooter>
                    <Button variant='solid' colorScheme='green' onClick={handleClick}>
                        Try to use
                    </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </VStack>
    )
}