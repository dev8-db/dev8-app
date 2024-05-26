import Head from "next/head";
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function Notices() {
    const posts = [
        {
            dateTime: '2024-05-25T22:00:00+09:00',
            heading: 'Updated the site design.',
            text: 'I significantly changed the site design using Chakra UI.',
            link: "none"
        },
    ];

    const timeDifference = (dateTime) => {
        const now = new Date();
        const postDate = new Date(dateTime);
        const diffInSeconds = Math.floor((now - postDate) / 1000);
        const years = Math.floor(diffInSeconds / (3600 * 24 * 365));
        const months = Math.floor(diffInSeconds / (3600 * 24 * 30));
        const days = Math.floor(diffInSeconds / (3600 * 24));
        const hours = Math.floor(diffInSeconds / 3600);
        const minutes = Math.floor(diffInSeconds / 60);

        if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
        if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    };

    const Post = ({ dateTime, heading, text, link }) => (
        <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' m='2'>
            <Box as='time' dateTime={dateTime} className='opacity-50'>
                {timeDifference(dateTime)}
            </Box>
            {link !== "none" ? (
                <Heading size='md' my='2'>
                <LinkOverlay href={link}>
                    {heading}
                </LinkOverlay>
                </Heading>
            ) : (
                <Heading size='md' my='2'>
                {heading}
                </Heading>
            )}
            <Text>
            {text}
            </Text>
        </LinkBox>
    );

    return (
        <div className="mr-[10px] ml-[10px] md:mr-0 md:ml-0">
            <Head>
                <title>Latest Notices -Develop8 Studio</title>
            </Head>
            <VStack className='mb-5'><Heading>Latest Notices</Heading></VStack>
            <VStack spacing={5}>
            {posts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
            </VStack>
        </div>
    )
}