import React from 'react';
import {
    Text, Flex, Box, Icon
} from "@chakra-ui/react";
import {
    FaLaptopCode,
    FaHeart,
    FaDove
} from "react-icons/fa";

export default function About() {
    return (
        <Flex align="center" className='mb-10'>
        <Box flex="1" textAlign="center" p={8}>
            <Icon as={FaLaptopCode} boxSize={12} color="blue.500" />
            <Text mt={4} fontWeight="bold">フロントエンド</Text>
            <Text mt={2}>2024年1月からHTMLとCSSを書き始めて、現在はNext.jsで開発を行っています。少しRubyも書けます。</Text>
            </Box>

            <Box flex="1" textAlign="center" p={8}>
            <Icon as={FaHeart} boxSize={12} color="yellow.500" />
            <Text mt={4} fontWeight="bold">趣味、好きなこと</Text>
            <Text mt={2}>読書が好きです。一度読み始めたら永遠に読めます。音楽を聴くことも好きです。</Text>
            </Box>

            <Box flex="1" textAlign="center" p={8}>
            <Icon as={FaDove} boxSize={12} color="green.500" />
            <Text mt={4} fontWeight="bold">Twitter</Text>
            <Text mt={2}>Twitterに生息しています。リプなどをしてくださったら（学校に行っている時は出来ませんが）秒で反応します。</Text>
        </Box>
        </Flex>
    )
}