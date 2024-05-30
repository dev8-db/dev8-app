import Head from "next/head";
import { Button } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Textarea
} from '@chakra-ui/react';
import {
    Alert,
    AlertIcon,
} from '@chakra-ui/react';

export default function Contact() {
    return (
        <div className='mr-[10px] ml-[10px] md:mr-5 md:ml-5'>
            <Head>
                <title>Contact Us -Develop8 Studio</title>
            </Head>
            <VStack className='mb-5'><Heading className="text-gray-700">Contact Us</Heading></VStack>
            <Alert status='warning' className='rounded-lg'>
                <AlertIcon />
                お問い合わせフォームは現在準備中です。
            </Alert>
            <FormControl className='mt-5'>
            <FormLabel textColor="gray.700">Email address</FormLabel>
            <Input type='email' isDisabled/>
            <FormHelperText>私はあなたのメールアドレスを決して共有しません。</FormHelperText>
            </FormControl>
            <FormControl className='mt-5'>
            <FormLabel textColor="gray.700">Substance</FormLabel>
            <Textarea placeholder='メッセージを入力' size='sm' isDisabled/>
            </FormControl>
            <Button type='submit' colorScheme='blue' className='mt-5' isDisabled>Submit</Button>
        </div>
    )
}