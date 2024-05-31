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
    Card,
    Stack
} from '@chakra-ui/react';

export default function ContactForm() {
    return (
        <VStack textAlign="left">
        <div
            overflow='hidden'
            className="w-[90%] md:w-[75%]"
            >
            <Alert status='warning' className='rounded-lg'>
                <AlertIcon />お問い合わせフォームは現在準備中です。
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
        </VStack>
    )
}