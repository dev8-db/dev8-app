import React from 'react';
import {
    Image, Text, VStack, Heading, Card, CardHeader, CardFooter, CardBody, Stack, Button, Highlight, Flex, HStack, Box, Icon, Avatar
} from "@chakra-ui/react";
import Articles from "@/components/Articles";
import Goods from "@/components/Goods";
import Link from "next/link";

export default function Terms() {
    return (
        <VStack className='mb-10'>
            <Heading lineHeight="tall" fontSize={{base: "50", sm: "100"}} className='w-[90%] md:w-[75%]'>Terms of service</Heading>
            <div className="w-[90%] md:w-[75%]">
                <Text>このウェブサイトの利用には、以下の利用規約に同意する必要があります。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>ウェブサイトの利用</Text>
                <Text>本ウェブサイトを利用することで、利用規約に同意したものとみなされます。本ウェブサイトの利用は、すべての適用法令と規制に従うものとします。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>知的財産権</Text>
                <Text>本ウェブサイト上のすべてのコンテンツ（テキスト、画像、音声、動画など）は、著作権およびその他の知的財産権により保護されています。これらのコンテンツを許可なく複製、配布、変更、公開することは禁止されています。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>リンク先の責任</Text>
                <Text>本ウェブサイトからリンクされた外部サイトやリソースの利用に関しては、その内容や利用条件についての責任は負いかねます。これらのリンク先の利用は、利用者の責任で行ってください。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>免責事項</Text>
                <Text>本ウェブサイトのコンテンツは、提供された情報に基づいて行動する場合でも、いかなる責任も負いません。利用者は自己の責任において情報を活用し、必要に応じて専門家に相談することをお勧めします。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>利用条件の変更</Text>
                <Text>本利用規約は、予告なしに変更される場合があります。変更後の利用規約は、ウェブサイト上で公開されると即時に有効となります。</Text>
            </div>
        </VStack>
    )
}