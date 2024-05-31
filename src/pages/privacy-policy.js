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
            <Heading lineHeight="tall" fontSize={{base: "50", sm: "100"}} className='w-[90%] md:w-[75%]'>Privacy Policy</Heading>
            <div className="w-[90%] md:w-[75%]">
                <Text>私たちは、利用者のプライバシーを尊重し、個人情報の保護に努めます。以下に、当サイトが収集する情報やその利用に関するポリシーを示します。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>収集する情報</Text>
                <Text>当サイトでは、利用者がお問い合わせフォームを通じて提供した情報を収集します。その他の情報の収集は行いません。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>情報の利用</Text>
                <Text>収集した情報は、利用者からのお問い合わせに対する回答やサービス提供のために利用されます。また、利用者の同意を得た場合に限り、お知らせやプロモーションのために利用される場合があります。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>情報の共有</Text>
                <Text>収集した情報は、第三者と共有されることはありません。ただし、法的要求に基づく場合や当サイトの利用規約に違反する行為を防止する目的で、必要な場合には情報を提供することがあります。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>Cookieの使用</Text>
                <Text>当サイトでは、Cookieは一切使用しておりません。</Text>
                <Text fontWeight="bold" fontSize="20" className='mt-5 mb-1'>プライバシーポリシーの変更</Text>
                <Text>当プライバシーポリシーは、予告なしに変更される場合があります。変更後のポリシーは、ウェブサイト上で公開されると即時に有効となります。</Text>
            </div>
        </VStack>
    )
}