import Head from "next/head";
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import Articles from "@/components/Articles";

export default function Writings() {
    return (
        <div>
            <Head>
                <title>Writings -Develop8 Studio</title>
            </Head>
            <VStack className='mb-5'><Heading className="text-gray-700">Writings</Heading></VStack>
            <VStack className='mb-10' textAlign="left">
                <Articles slice="full" des="50" />
            </VStack>
        </div>
    )
}