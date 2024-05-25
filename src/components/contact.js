import { Button } from '@chakra-ui/react';
import { TabPanel } from '@chakra-ui/react';
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
        <TabPanel>
            <VStack className='mb-5'><Heading>Contact Us</Heading></VStack>
            <Alert status='warning' className='rounded-lg'>
            <AlertIcon />
            The inquiry form is under construction.
            </Alert>
            <FormControl className='mt-5'>
            <FormLabel>Email address</FormLabel>
            <Input type='email' isDisabled/>
            <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl className='mt-5'>
            <FormLabel>Substance</FormLabel>
            <Textarea placeholder='Enter your message' size='sm' isDisabled/>
            </FormControl>
            <Button type='submit' colorScheme='blue' className='mt-5' isDisabled>Submit</Button>
        </TabPanel>
    )
}