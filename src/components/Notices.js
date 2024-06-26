import { Box } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function NoticesList() {
    const posts = [
        {
            dateTime: '2024-05-28T00:00:00+09:00',
            heading: 'サイトのデザインを更新しました。',
            text: 'Chakra UIを使用して、サイトのデザインを大幅に変更しました。',
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
        <LinkBox as='article' p='5' borderWidth='1px' rounded='md' m='2' boxShadow="sm" className="w-xl xl:w-xl lg:w-lg md:w-md sm:w-sm">
            <Box as='time' dateTime={dateTime} className='opacity-50'>
                {timeDifference(dateTime)}
            </Box>
            {link !== "none" ? (
                <Heading size='md' my='2' className="text-gray-700">
                <LinkOverlay href={link}>
                    {heading}
                </LinkOverlay>
                </Heading>
            ) : (
                <Heading size='md' my='2' className="text-gray-700">
                {heading}
                </Heading>
            )}
            <Text className="text-gray-500">
            {text}
            </Text>
        </LinkBox>
    );

    return (
    <VStack spacing={5}>
        {posts.map((post, index) => (
            <Post key={index} {...post} />
        ))}
    </VStack>
    )
}