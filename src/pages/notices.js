import Head from "next/head";
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import NoticesList from "@/components/Notices";

export default function Notices() {
    return (
        <div className="mr-[10px] ml-[10px] md:mr-0 md:ml-0">
            <Head>
                <title>Latest Notices -Develop8 Studio</title>
            </Head>
            <VStack className='mb-5'><Heading className="text-gray-700">Latest Notices</Heading></VStack>
            <NoticesList />
        </div>
    )
}