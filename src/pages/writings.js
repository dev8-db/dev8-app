import Head from "next/head";
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';

export default function Writings() {
    const articles = [
        { date: 'May 16', title: '【Next.js】なぜimgタグではなくnext/imageを使うのか', category: 'Tech', url: 'https://zenn.dev/dev8/articles/nextjs_image' },
        { date: 'May 4', title: 'ドメインを入力してからページが表示されるまでの仕組み', category: 'Tech', url: 'https://zenn.dev/dev8/articles/dns_http_https' },
        { date: 'April 23', title: 'VercelでのNext.jsデプロイ時のタグ関連エラー対処法', category: 'Tech', url: 'https://zenn.dev/dev8/articles/error_next_vercel' },
        { date: 'April 20', title: 'JavaScriptとTypeScriptの違い', category: 'Tech', url: 'https://zenn.dev/dev8/articles/typing_js_ts' },
        { date: 'April 20', title: 'ベクター画像とラスター画像の違い', category: 'Tech', url: 'https://zenn.dev/dev8/articles/image_magick' },
        { date: 'April 20', title: 'Gatsby.js 入門', category: 'Tech', url: 'https://zenn.dev/dev8/articles/gatsby_tutorial' }
    ];

    return (
        <div>
            <VStack className='mb-5'><Heading>Writings</Heading></VStack>
            <Head>
                <title>Writings -Develop8 Studio</title>
            </Head>
            <TableContainer>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>published</Th>
                    <Th>title</Th>
                    <Th isNumeric>type</Th>
                </Tr>
                </Thead>
                <Tbody>
                {articles.map((article, index) => (
                <Tr key={index}>
                    <Td>{article.date}</Td>
                    <Td>
                    <Link href={article.url}>{article.title}</Link>
                    </Td>
                    <Td isNumeric>{article.category}</Td>
                </Tr>
                ))}
                </Tbody>
            </Table>
            </TableContainer>
        </div>
    )
}