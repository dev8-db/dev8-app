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
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact Us -Develop8 Studio</title>
            </Head>
            <VStack className='mb-5'><Heading className="text-gray-700">Contact Us</Heading></VStack>
            <ContactForm />
        </div>
    )
}